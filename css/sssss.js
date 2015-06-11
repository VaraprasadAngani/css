var ul = document.getElementsByTagName('ul');
            var li = ul[0].getElementsByTagName('li');
            var array = new Array();
            for (var i = 0; i < li.length; i++) {
                array.push(li[i].innerText)
            }
            alert(array);