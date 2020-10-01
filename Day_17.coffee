(function() {
  var input_data, regex, result;

  input_data = "Cerner_2^5_2020 Programming competition";

  regex = /C.*2020,*/;

  result = regex.exec(input_data);

  console.log(result);

}).call(this);
//Coffeescript code that returns the sub-strings that match the regex from the input string, Cerner_2^5_2020
