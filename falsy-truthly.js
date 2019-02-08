if (false)      {} else {console.log('false is falsy');}
if (null)       {} else {console.log('null is falsy');}
if (undefined)  {} else {console.log('underfined is falsy');}
if (0)          {} else {console.log('0 is falsy');}
if (NaN)        {} else {console.log('NaN is falsy');}
if ('')         {} else {console.log('an empty string with single-quotes is falsy');}
if ("")         {} else {console.log('an empty string with double-quotes is falsy');}

// Everything else is truthly

if (true)       { console.log('true is truthy');}
if ({})         { console.log('an empty object is truthy');}
if ([])         { console.log('an empty array is truthy');}

if ('bob')      { console.log('an non-empty string is truthy');}
if (new RegExp()) { console.log('a new instance of an object is truthy');}

if (10)          { console.log('positive integers is truthy');}
if (-10)         { console.log('negative integers is truthy');}
if (1.23)        { console.log('positive float is truthy');}
if (-1.23)       { console.log('negative float is truthy');}
if (Infinity)    { console.log('positive Infinity is truthy');}
if (-Infinity)   { console.log('negative Infinity is truthy');}

