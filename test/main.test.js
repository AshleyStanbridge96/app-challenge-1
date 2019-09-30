QUnit.test( "TEST calcstringLength", assert => {
    assert.equal(calcstringLength("Hello"),5, "5 characters");
    assert.equal(calcstringLength(""),0, "Empty string")
    assert.equal(calcstringLength("7"),1, "1 character")
  });