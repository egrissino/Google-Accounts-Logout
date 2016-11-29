document.addEventListener('DOMContentLoaded', Logout);

function Logout(){
    document.getElementById('status').innerHTML = '<h2>Initalizing Logout</h2>';
    
    var path = 'http://www.google.com/accounts/Logout';
    
    var element = document.createElement("iframe"); 
    element.src = path;
    element.setAttribute('id', 'myframe');
    element.style.display = "none";
    document.body.appendChild(element);
    
    document.getElementById('status').innerHTML = '<h2>Logout Sucessful</h2>';
    
    var queryInfo = {
    };
    
    chrome.tabs.query(queryInfo, function(tabs) {
        // chrome.tabs.query invokes the callback with a list of tabs that match the
        // query. When the popup is opened, there is certainly a window and at least
        // one tab, so we can safely assume that |tabs| is a non-empty array.
        // A window can only have one active tab at a time, so the array consists of
        // exactly one tab.
        
        for(i = 0;; i++) {
            try {
                var tab = tabs[i];
                chrome.tabs.reload(tab.id);
                i++;
            } 
            catch(err) {
                break;
            }
        };
        
    });
    
    return null;
};

