function createSidebarEntry(marker, name, phone, address, distance) {
  var saddr = document.getElementById('addressInput').value;
  var li = document.createElement('li');
  var html = '' + name + ' (' + distance.toFixed(1) + ' miles)' + address + phone +'<a href="http://maps.google.com/maps?saddr='+ saddr +'&daddr=' + address +'" /></a>';
  li.innerHTML = html;

  $('#locationList').listview('refresh'); 

  return li;

}