
Math.fraction= function(n, prec, up)
{
    var s= String(n), 
    p= s.indexOf('.');
    if(p== -1) return s;
    var i= Math.floor(n) || '', 
    dec= s.substring(p), 
    m= prec || Math.pow(10, dec.length-1), 
    num= up=== 1? Math.ceil(dec*m): Math.round(dec*m), 
    den= m, 
    g= Math.gcd(num, den);
    if(den/g== 1) return String(i+num);
    if(i) i= i+' and  ';
    return i+ String(num/g)+'/'+String(den/g);
}

Number.fromFraction= function(str, prec)
{
    var rx=/(\d+)\/(\d+)/, dec= 0, I= 0, 
    M= rx.exec(str);
    if(M){
        if(M.index>0) I= parseFloat(str);
        if(M[1]) dec= M[1]/M[2];
        if(!prec) prec= str.length+1;
        if(typeof prec== 'number') dec= +(dec.toFixed(prec));
        return I+dec;
    }
    return parseFloat(str);
}

Number.fromRoman= function(s)
{
    s= String(s).toUpperCase();
    if(s.length>15 ||  /[^MDCLXVI]/.test(s)) return NaN;
    var L= s.length, sum= 0, i= 0, next, val, 
    R={
        M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1
    };
    while(i<L){
        val= s.charAt(i++);
        if(!R[val]) return NaN;
        val= R[val];
        next= R[(s.charAt(i) || 'N')] || 0;
        if(next>val) val*= -1;
        sum+= val;
    }
    if(sum.toRoman()== s) return sum;
    return NaN;
}

Number.prototype.toRoman= function()
{
    var n= Math.floor(this), val, s= '', limit= 3999, i= 0, 
    v= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], 
    r= ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    if(n<1 || n>limit) return '';
    while(i<13){
        val= v[i];
        while(n>= val){
            n-= val;
            s+= r[i];
        }
        if(n== 0) return s;
        ++i;
    }
    return '';
}

var NW={
    /* numbers to words */
    nameNumbers: function(str){
        var nw= NW.numberWords, 
        s= (str+'').replace(/([^\d])(?=\.\d+)/g, '$1 0').trim();
        var f, w= '', x, xs, n, ns, M, 
        rx=/(-?\d+)(\.(\d+)([eE]([+-]?\d+))?)?/g, 
        rx2=/(\d+)(\.(\d+)([eE]([+-]?\d+))?)?/, 
        rq=/((\d+)? +(and +)?)?(\d+)\/(\d+)/g;
        s= s.replace(rq, function(a){
            return NW.printFraction(a);
        });
        s= s.replace(rx, function(q){
            n= +q;
            ns= n+'';
            M= rx2.exec(ns) || [];
            w= (n<0)? 'minus ': '';
            if(M[1]) w+= nw(M[1]);
            if(M[3]){
                f= M[3].split('').map(function(itm){
                    return nw(itm);
                });
                w+= ' point '+ f.join(' ');
                if(M[5]){
                    x= +M[5];
                    xs= x<0? 'minus ': '';
                    xs+= NW.ordinal(nw(x));
                    w+= ' times ten to the '+xs;
                }
            }
            return w || q;
        });
        return s.replace(/ {2,}/g, ' ');
    },
    numberWords: function numberWords(x){
        var n= +x;
        if(isNaN(n) || n%1) return ''+x;
        n= Math.abs(n);
        var i= 0, p, prefix= [], num, rem, 
        NK= NW.numberwords_array, 
        w= NK[0], w1= NK[1], w2= NK[2], mag= NK[3];
        while(n>99){
            x= mag[i];
            if(n>= x){
                p= Math.floor(n/x);
                n%= x;
                prefix.push(numberWords(p)+w2[i]);
            }
            ++i;
        }
        if(prefix.length){
            prefix= prefix.join(', ');
            if(n) prefix+= ' and ';
            else return prefix;
        }
        else prefix= '';
        if(n<20) num= w[n];
        else{
            num= w1[Math.floor(n/10)];
            rem= n%10;
            if(rem) num+= ' '+w[rem];
        }
        return prefix+num;
    },
    numberwords_array: [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
        ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
        'seventy', 'eighty', 'ninety'], 
        [' quadrillion', ' trillion', ' billion', ' million', 
        ' thousand', ' hundred'], 
        [1e15, 1e12, 1e9, 1e6, 1e3, 100]
    ], 
    ordinal: function(s){
        var ax, rx, suffix, str= ' '+s.trim();
        ax= str.lastIndexOf(' ');
        suffix= str.substring(ax).toLowerCase();
        if(str.charAt(str.length-1)== 'y'){
            return str.slice(0, -2)+'tieth';
        }
        if(ax>1) str= str.substring(0, ax);
        else str= ' ';
        switch(suffix.trim()){
            case 'one': return str+' first';
            case 'two': return str+' second';
            case 'three': return str+' third';
            case 'five': return str+' fifth';
            case 'eight': return str+' eighth';
            case 'nine': return str+' ninth';
            case 'twelve': return str+' twelfth';
            default: return str+suffix+'th';
        }
    },
    printFraction: function(str){
        var num, RN= NW.numberWords, 
        M=/((\d+) +)?(\d+) *\/ *(\d+)/g.exec(str.trim());
        if(!M) return str;
        num= M[2]? RN(M[2])+' and ': '';
        num+= RN(+M[3])+'-';
        if(M[4]=== '2') num+= 'half';
        else if(M[4]=== '4') num+= 'quarter';
        else num+= NW.ordinal(RN(+M[4]));
        if(M[3]!== '1') num+= 's';
        return num;
    },
    /* words to numbers */
    reDigit: function(n){
        var sub= [], tem, d= n.match(/[a-z]+/g), L= d.length-1, 
        nwords= NW.wordnumber_keys;
        d.map(function(w, i){
            tem= nwords[w];
            if(isFinite(tem)){
                if(tem<20 || i== L) sub.push(tem+'');
                else sub.push((tem+'').charAt(0));
            }
        });
        return sub.join('');
    },
    reFraction: function(str){
        var M, w= 0, n, d, f2= 0, prec, ax;
        ax= str.lastIndexOf(' and ');
        if(ax== -1){
            ax= 0;
            w= 'zero';
        }
        else{
            w= str.substring(0, ax);
            ax+= 4;
        }
        M= str.substring(ax).split('-');
        n= M[0];
        d= M[1];
        if(n && d){
            d= NW.wordsToNumber(d);
            n= NW.wordsToNumber(n);
            return [w, n/d];
        }
        return [w];
    },
    wordNumber: function(str){
        var n= 0, sign= 1, whole= 0, dec= 0, frac, 
        suffix= 0, exp= 1, exsign= 1, prec, pt, 
        rx1=  /(illion|thousand|hundred)/i, 
        rx2=/( +times ten to the( +minus)? +)/g, 
        rx3=/(point|times|[^a-z, ])/, 
        s= str.toLowerCase().trim().replace(/ieth?$/, 'y').replace(/(ths?|s)$/, '');
        if(s.indexOf('minus ')== 0){
            sign= -1;
            s= s.substring(5);
        }
        if(!rx3.test(s)){
            n= (!rx1.test(s))? NW.reDigit(s): NW.wordsToNumber(s);
            return n*sign;
        }
        whole= s;
        var pt= s.split('point ');
        dec= pt[1];
        if(dec){
            whole= pt[0];
            temp= rx2.exec(dec);
            if(temp!= null){
                if(temp[2]) exsign= -1;
                suffix= dec.substring(rx2.lastIndex);
                dec= dec.substring(0, temp.index);
                suffix= NW.wordsToNumber(suffix);
                exp= Math.pow(10, suffix*exsign);
            }
            dec= NW.reDigit(dec);
            prec= dec.length+1;
            dec= +('0.'+dec);
        }
        else if(whole.indexOf('-')!= -1){
            pt= NW.reFraction(whole);
            whole= pt[0];
            dec= pt[1];
        }
        n= NW.wordsToNumber(whole.replace(/ +and +/g, ' '));
        if(dec){
            n+= dec;
            if(!prec) frac= Math.min(String(n).length, 15);
            n= n.toPrecision(frac);
        }
        if(exp!== 1) return sign*((n*exp).toExponential(prec));
        return sign*n;
    },
    wordnumber_keys:{
        billion: 1e9, eigh: 8, eight: 8, eighteen: 18, eightt: 8, eighty: 80, 
        eleven: 11, fif: 5, fifteen: 15, fifty: 50, first: 1, five: 5, forty: 40, 
        four: 4, fourteen: 14, half: 2, hundred: 100, million: 1e6, nin: 9, 
        nine: 9, nineteen: 19, ninety: 90, one: 1, quadrillion: 1e15, quarter: 4, 
        second: 2, seven: 7, seventeen: 17, seventy: 70, six: 6, sixteen: 16, 
        sixty: 60, ten: 10, third: 3, thirteen: 13, thirty: 30, thousand: 1e3, 
        three: 3, trillion: 1e12, twelf: 12, twelve: 12, twenty: 20, two: 2, zero: 0
    },
    wordsToNumber: function(s){
        var w= s.toLowerCase().replace(/(thousand|[mbr]illion),?/g, '$1,');
        var n= 0, nArray= w.split(/,/), 
        sub= 0, tem, segment, 
        nwords= NW.wordnumber_keys;
        while(nArray.length){
            sub= 0;
            segment= nArray.shift().match(/[a-z]+/g) || [];
            segment.forEach(function(w2){
                tem= nwords[w2.trim()];
                if(isFinite(tem)){
                    if(tem<100) sub+= tem;
                    else sub*= tem;
                }
            });
            n+= sub;
        }
        return n;
    }
}



var nw= NW, v2= [], v;
	
// CODE SNIPPET var grinder = 35.123; var mo = numbertranslate( grinder );alert(mo);

function numbertranslate( sv )
{
	if(/^[IVXLCDM]+$/.test(sv)) sv= Number.fromRoman(sv);
							
	if(/^[a-z ,-]+$/i.test(sv))
	{
		v2= nw.wordNumber(sv);
	}
	
	else v2= nw.nameNumbers(sv);   
							
	return v2;    		// in jQuery, simply store or display v2 in wherever you want instead of returning it.  
						
}

// }

