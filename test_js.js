

QUnit.test("findTheString",function(assert) {
   var fhp = findTheString("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
assert.equal(["1 for R3", "2 for R7", "3 for R10", "5 for R14.50"], fhp);
});

//QUnit.test("", function(assert) {
  //var
//});