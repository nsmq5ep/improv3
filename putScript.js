// newScript.js

$(document).ready(function(){
    $("#sendData").click(function(){
        var data = {
            "bin": {
                "key1": "value1",
                "key2": "value2",
                "key3": "value3",
                "key4": "value4",
                "key5": "value5",
                "key6": "value6",
                "key7": "value7",
                "key8": "value8",
                "key9": "value9",
                "key10": "value10",
                "key11": "value11",
                "key12": "value12",
                "key13": "value13",
                "key14": "value14",
                "key15": "value15"
            }
        };
        $.ajax({
            url: 'https://api.jsonstorage.net/v1/json/86d2965f-cae1-43a2-8f49-cb2da6a5527f/e430f896-84a1-4ddb-a1f8-bedcfb5c1561?apiKey=4d240d29-fad5-4651-addf-68ca76fa5ba8',
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(result) {
                console.log(result);
            },
            error: function(error){
                console.log(error);
            }
        });
    });
});
