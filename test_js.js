

QUnit.test("findTheString",function(assert) {
   var showResults = findTheString("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
assert.deepEqual(["1 for R3", "2 for R7", "3 for R10", "5 for R14.50."], showResults);
});

//QUnit.test("", function(assert) {
  //var
//});