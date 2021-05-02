// for printing list with HTML setup

printList = (list) => {

    var listHTML = '<ol>'

    for (let i = 0; list.length > i; i++) {
        listHTML += '<li>' + list[i] + '</li>';
    }

    listHTML += '</ol>'
    document.write(listHTML)

};

// for printing out values has paragraphs
print = (msg) => {

    document.write('<p>' + msg + '</p>');

}

// for printing out multi-dimentional arrays
printArray = (array) => {

    for (let i = 0; array.length > i; i++) {
        document.write('[' + array[i] + ']' + '</br>')
    }

};

