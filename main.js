function renderEncode(){
  console.log("render!");
  var text = $('#encodeThis').val();
  console.log(text);
  $('#results').text(encode(text));
}

function renderDecode(){
  var text = $('#decodeThis').val();
  $('#results').text(decode(text));
}

$('#encode').click(renderEncode);
$('#decode').click(renderDecode);
