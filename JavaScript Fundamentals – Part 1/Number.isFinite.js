Number.isFinite(42);        // true
Number.isFinite(Infinity);  // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN);       // false
Number.isFinite('42');      // false (because '42' is not a number)
Number.isFinite(null);      // false (because null is not a number)
Number.isFinite(true);      // false (because true is not a number)
