// newFeature.js

// Local JSON data (initially assuming these are the last 15 backing titles)
var localJSON = {
    "bin": {
        "key1": "CminBacking(6)",
        "key2": "DminBacking(1)",
        "key3": "GMajBacking(3)",
        "key4": "CMajBacking(7)",
        "key5": "DminBacking(3)",
        "key6": "AminBacking(1)",
        "key7": "AminBacking(8)",
        "key8": "AminBacking(2)",
        "key9": "DminBacking(9)",
        "key10": "DMajBacking(2)",
        "key11": "FMajBacking(4)",
        "key12": "DMajBacking(1)",
        "key13": "GMajBacking(1)",
        "key14": "FMajBacking(2)",
        "key15": "GminBacking(8)"
    }
};


// Function to check if a title is present in the local JSON
function isTitlePresentInLocalJSON(title) {
    const localData = readLocalJSON();
    if (localData && localData.bin) {
        // Check if the title is one of the values in the bin object
        return Object.values(localData.bin).includes(title);
    }
    return false;
}


// Function to read the local JSON file
function readLocalJSON() {
    // Replace this with actual code to read from storage or file system
    return localJSON;
}

// Example usage in the newFeature.js
function checkIfTitlePresent(title) {
    let isPresent = isTitlePresentInLocalJSON(title);
    if (isPresent) {
        console.log("Title already present");
    } else {
        console.log("Title not present");
    }
    return isPresent;
}




// Export functions for testing
window.isTitlePresentInLocalJSON = isTitlePresentInLocalJSON;
window.readLocalJSON = readLocalJSON;
window.checkIfTitlePresent = checkIfTitlePresent;
