//CPU Parts Functionality
const cpuList = document.querySelector('#cpuList');

function showDataCPU(doc){
    let li = document.createElement('li');
    let core = document.createElement('span');
    let width = document.createElement('span');
    let manu = document.createElement('span');
    let model = document.createElement('span');
    let name = document.createElement('span');
    let op = document.createElement('span');
    let price = document.createElement('span');
    let socket= document.createElement('span');
    let tf = document.createElement('span');
    let partNum = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    core.textContent = "CPU: " + doc.data().Cores;
    width.textContent = "Data Width: " + doc.data().DataWidth;
    manu.textContent = "Manufacturer: " + doc.data().Manufacturer;
    model.textContent = "Model: " + doc.data().Model;
    name.textContent = "Name: " + doc.data().Name;
    op.textContent = "Operating Frequency: " + doc.data().OperatingFrequency;
    price.textContent = "Price: " + doc.data().Price;
    socket.textContent = "Socket: " + doc.data().Socket;
    tf.textContent = "Turbo Frequency: " + doc.data().TurboFrequency;
    partNum.textContent = "Part #: " + doc.data().partNum;
    
    li.appendChild(core);
    li.appendChild(width);
    li.appendChild(manu);
    li.appendChild(model);
    li.appendChild(name);
    li.appendChild(op);
    li.appendChild(price);
    li.appendChild(socket);
    li.appendChild(tf);
    li.appendChild(partNum);

    cpuList.appendChild(li);
}

function getDataCPU() {
    document.getElementById("cpuStatus").innerHTML = '';
    document.getElementById("cpuList").innerHTML = '';
    var x = document.getElementById("cpuOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db3.doc("CPU/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataCPU(doc);
        }
    });
}

function saveDataCPU() {
    var x = document.getElementById("cpuOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db3.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        CPU: "CPU: " + itemText
    }, { merge: true });
    document.getElementById("cpuStatus").innerHTML = "CPU Added to list";

}

//Motherboard Parts Functionality
const mbList = document.querySelector('#mbList');

function showDataMB(doc){
    let li = document.createElement('li');
    let cpSocket = document.createElement('span');
    let chipset = document.createElement('span');
    let form = document.createElement('span');
    let manu = document.createElement('span');
    let maxMem = document.createElement('span');
    let memSlot = document.createElement('span');
    let memType = document.createElement('span');
    let name = document.createElement('span');
    let price = document.createElement('span');
    let partNum = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    cpSocket.textContent = "CPU Socket: " + doc.data().CPUSocket;
    chipset.textContent = "Chipset: " + doc.data().Chipset;
    form.textContent = "Form Factor: " + doc.data().FormFactor;
    manu.textContent = "Manyfacturer: " + doc.data().Manufacturer;
    maxMem.textContent = "Max Memory: " + doc.data().MaxMemory;
    memSlot.textContent = "Memory Slot: " + doc.data().MemorySlots;
    memType.textContent = "Memory Type: " + doc.data().MemoryType;
    name.textContent = "Name: " + doc.data().Name;
    price.textContent = "Price: " + doc.data().Price;
    partNum.textContent = "Part #: " + doc.data().partNum;
    
    li.appendChild(cpSocket);
    li.appendChild(chipset);
    li.appendChild(form);
    li.appendChild(manu);
    li.appendChild(maxMem);
    li.appendChild(memSlot);
    li.appendChild(memType);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(partNum);

    mbList.appendChild(li);
}

function getDataMB() {
    document.getElementById("mbStatus").innerHTML = '';
    document.getElementById("mbList").innerHTML = '';
    var x = document.getElementById("mbOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db4.doc("Motherboard/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataMB(doc);
        }
    });
}

function saveDataMB() {
    var x = document.getElementById("mbOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db4.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        Motherboard: "Motherboard: " + itemText
    }, { merge: true });
    document.getElementById("mbStatus").innerHTML = "Motherboard Added to list";
}



//Memory Parts Functionality
const dataList = document.querySelector('#dataList');

function showData(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let manu = document.createElement('span');
    let partNum = document.createElement('span');
    let type = document.createElement('span');
    let size = document.createElement('span');
    let speed = document.createElement('span');
    let price = document.createElement('span');
    let pricePerGB = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = "Name: " + doc.data().Name;
    manu.textContent = "Manyfacturer: " + doc.data().Manufacturer;
    partNum.textContent = "Part #: " + doc.data().partNum;
    type.textContent = "Type: " + doc.data().Type;
    size.textContent = "Size: " + doc.data().Size;
    speed.textContent = "Speed: " + doc.data().Speed;
    price.textContent = "Price: " + doc.data().Price;
    pricePerGB.textContent = "Price Per GB: " + doc.data().pricePerGB;


    li.appendChild(name);
    li.appendChild(manu);
    li.appendChild(partNum);
    li.appendChild(type);
    li.appendChild(size);
    li.appendChild(speed);
    li.appendChild(price);
    li.appendChild(pricePerGB);

    dataList.appendChild(li);
}

function getData() {
    document.getElementById("status").innerHTML = '';
    document.getElementById("dataList").innerHTML = '';
    var x = document.getElementById("memOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db.doc("RAM/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showData(doc);
        }
    });
}

function saveData() {
    var x = document.getElementById("memOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        RAM: "RAM: " + itemText
    }, { merge: true });
    document.getElementById("status").innerHTML = "RAM Added to list";
}

//Storage Parts Functionality
const storeList = document.querySelector('#storeList');

function showDataStore(doc){
    let li = document.createElement('li');
    let cache = document.createElement('span');
    let Capacity = document.createElement('span');
    let interface = document.createElement('span');
    let manu = document.createElement('span');
    let name = document.createElement('span');
    let price = document.createElement('span');
    let rpm = document.createElement('span');
    let partNum = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    cache.textContent = "Cache: " + doc.data().Cache;
    Capacity.textContent = "Capacity: " + doc.data().Capacity;
    interface.textContent = "Interface: " + doc.data().Interface;
    manu.textContent = "Manufacturer: " + doc.data().Manufacturer;
    name.textContent = "Name: " + doc.data().Name;
    price.textContent = "Price: " + doc.data().Price;
    rpm.textContent = "RPM: " + doc.data().RPM;
    partNum.textContent = "Part #: " + doc.data().partNum;
    
    li.appendChild(cache);
    li.appendChild(Capacity);
    li.appendChild(interface);
    li.appendChild(manu);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(rpm);
    li.appendChild(partNum);

    storeList.appendChild(li);
}

function getDataStore() {
    document.getElementById("storeStatus").innerHTML = '';
    document.getElementById("storeList").innerHTML = '';
    var x = document.getElementById("storeOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db5.doc("Storage/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataStore(doc);
        }
    });
}

function saveDataStore() {
    var x = document.getElementById("storeOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db5.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        Storage: "Storage: " + itemText
    }, { merge: true });
    document.getElementById("storeStatus").innerHTML = "Storage Added to list";
}

//GPU Parts Functionality
const gpuList = document.querySelector('#gpuList');

function showDataGPU(doc){
    let li = document.createElement('li');
    let boost = document.createElement('span');
    let chipset = document.createElement('span');
    let interface = document.createElement('span');
    let manu = document.createElement('span');
    let memSize = document.createElement('span');
    let memType = document.createElement('span');
    let name = document.createElement('span');
    let price= document.createElement('span');
    let partNum = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    boost.textContent = "Boost Clock: " + doc.data().BoostClock;
    chipset.textContent = "Chipset: " + doc.data().Chipset;
    interface.textContent = "Interface: " + doc.data().Interface;
    manu.textContent = "Manufacturer: " + doc.data().Manufacturer;
    memSize.textContent = "Memory Size: " + doc.data().MemorySize;
    memType.textContent = "Memory Type: " + doc.data().MemoryType;
    name.textContent = "Name: " + doc.data().Name;
    price.textContent = "Price: " + doc.data().Price;
    partNum.textContent = "Part #: " + doc.data().partNum;
    
    li.appendChild(boost);
    li.appendChild(chipset);
    li.appendChild(interface);
    li.appendChild(manu);
    li.appendChild(memSize);
    li.appendChild(memType);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(partNum);

    gpuList.appendChild(li);
}

function getDataGPU() {
    document.getElementById("gpuStatus").innerHTML = '';
    document.getElementById("gpuList").innerHTML = '';
    var x = document.getElementById("gpuOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db6.doc("GPU/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataGPU(doc);
        }
    });
}

function saveDataGPU() {
    var x = document.getElementById("gpuOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db6.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        GPU: "GPU: " + itemText
    }, { merge: true });
    document.getElementById("gpuStatus").innerHTML = "GPU Added to list";
}

//PSU Parts Functionality
const psuList = document.querySelector('#psuList');

function showDataPSU(doc){
    let li = document.createElement('li');
    let ec = document.createElement('span');
    let manu = document.createElement('span');  
    let model = document.createElement('span');
    let modular = document.createElement('span');
    let name = document.createElement('span');
    let price= document.createElement('span');
    let type = document.createElement('span');
    let wat = document.createElement('span');
    let partNum = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    ec.textContent = "Efficiency Certification: " + doc.data().EfficiencyCertification;
    manu.textContent = "Manufacturer: " + doc.data().Manufacturer;
    model.textContent = "Model: " + doc.data().Model;
    modular.textContent = "Modular: " + doc.data().Modular;
    name.textContent = "Name: " + doc.data().Name;
    price.textContent = "Price: " + doc.data().Price;
    type.textContent = "Type: " + doc.data().Type;
    wat.textContent = "Wattage: " + doc.data().Wattage;
    partNum.textContent = "Part #: " + doc.data().partNum;
    
    li.appendChild(ec);
    li.appendChild(manu);
    li.appendChild(model);
    li.appendChild(modular);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(type);
    li.appendChild(wat);
    li.appendChild(partNum);

    psuList.appendChild(li);
}

function getDataPSU() {
    document.getElementById("psuStatus").innerHTML = '';
    document.getElementById("psuList").innerHTML = '';
    var x = document.getElementById("psuOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db7.doc("PSU/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataPSU(doc);
        }
    });
}

function saveDataPSU() {
    var x = document.getElementById("psuOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db7.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        PSU: "PSU: " + itemText
    }, { merge: true });
    document.getElementById("psuStatus").innerHTML = "PSU Added to list";
}

//Case Parts Functionality
const caseList = document.querySelector('#caseList');

function showDataCase(doc){
    let li = document.createElement('li');
    let color = document.createElement('span');
    let dim = document.createElement('span');  
    let comp = document.createElement('span');
    let manu = document.createElement('span');
    let name = document.createElement('span');
    let price= document.createElement('span');
    let type = document.createElement('span');
    let model = document.createElement('span');
    let partNum = document.createElement('span');
    let maxL = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    color.textContent = "Color: " + doc.data().Color;
    dim.textContent = "Dimensions: " + doc.data().Dimensions;
    comp.textContent = "Compatible: " + doc.data().Compatible;
    manu.textContent = "Manufacturer: " + doc.data().Manufacturer;
    name.textContent = "Name: " + doc.data().Name;
    price.textContent = "Price: " + doc.data().Price;
    type.textContent = "Type: " + doc.data().Type;
    model.textContent = "Model: " + doc.data().Model;
    partNum.textContent = "Part #: " + doc.data().partNum;
    maxL.textContent = "Max GPU Lenght: " + doc.data().MaxGPULength;
    
    li.appendChild(color);
    li.appendChild(dim);
    li.appendChild(comp);
    li.appendChild(manu);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(type);
    li.appendChild(model);
    li.appendChild(partNum);
    li.appendChild(maxL);

    caseList.appendChild(li);
}

function getDataCase() {
    document.getElementById("caseStatus").innerHTML = '';
    document.getElementById("caseList").innerHTML = '';
    var x = document.getElementById("caseOption").selectedIndex;
    var itemVal = document.getElementsByTagName("option")[x].value;
    db8.doc("Case/" + itemVal).get().then( function(doc) {
        if (doc && doc.exists) {
            showDataCase(doc);
        }
    });
}

function saveDataCase() {
    var x = document.getElementById("caseOption").selectedIndex;
    var itemText = document.getElementsByTagName("option")[x].text;
    db8.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        Case: "Case: " + itemText
    }, { merge: true });
    document.getElementById("caseStatus").innerHTML = "Case Added to list";
}

//My List Functionality
const myList = document.querySelector('#myList');

function myListSearch(doc){
    let li = document.createElement('li');
    let CPU = document.createElement('span');
    let GPU = document.createElement('span');
    let MB = document.createElement('span');
    let PSU = document.createElement('span');
    let RAM = document.createElement('span');
    let Store = document.createElement('span');
    let Case = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    CPU.textContent = doc.data().CPU;
    GPU.textContent = doc.data().GPU;
    MB.textContent = doc.data().Motherboard;
    PSU.textContent = doc.data().PSU;
    RAM.textContent = doc.data().RAM;
    Store.textContent = doc.data().Storage;
    Case.textContent = doc.data().Case;

    li.appendChild(CPU);
    li.appendChild(GPU);
    li.appendChild(MB);
    li.appendChild(PSU);
    li.appendChild(RAM);
    li.appendChild(Store);
    li.appendChild(Case);

    myList.appendChild(li);
}

function appendDoc(doc, name) {
    db2.doc("CommunityList/" + name).set({
        CPU: doc.data().CPU,
        GPU: doc.data().GPU,
        Motherboard: doc.data().Motherboard,
        PSU: doc.data().PSU,
        RAM: doc.data().RAM,
        Storage: doc.data().Storage,
        Case: doc.data().Case
    });
}

db2.doc("Lists/KLWKx3wSkiqeh8zSO52s").get().then( function(doc) {
    if (doc && doc.exists) {
        myListSearch(doc);
    }
});

function shareList() {
    var name = document.getElementById("listName").value;
    db2.doc("Lists/KLWKx3wSkiqeh8zSO52s").get().then( function(doc) {
        if (doc && doc.exists) {
            appendDoc(doc, name);
        }
    });
    location.replace("CommunityLists.html");
}

function clearList() {
    db2.doc("Lists/KLWKx3wSkiqeh8zSO52s").set({
        CPU: "CPU:",
        GPU: "GPU:",
        Motherboard: "Motherboard:",
        PSU: "PSU:",
        RAM: "RAM:",
        Storage: "Storeage: ",
        Case: "Case:"
    });
}

//Shared List
function renderCafe(doc){
    const sharedList = document.querySelector('#shared-list');
    let li = document.createElement('li');
    let id = document.createElement('span');
    let cpu = document.createElement('span');
    let cas = document.createElement('span');
    let gpu = document.createElement('span');
    let motherb = document.createElement('span');
    let psu = document.createElement('span');
    let ram = document.createElement('span');
    let storage = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    id.textContent = doc.id;
    cpu.textContent = "CPU: " + doc.data().CPU;
    cas.textContent = "Case: " + doc.data().Case;
    gpu.textContent = "GPU: " + doc.data().GPU;
    motherb.textContent = "Motherboard: " + doc.data().Motherboard;
    psu.textContent = "PSU: " + doc.data().PSU;
    ram.textContent = "RAM: " + doc.data().RAM;
    storage.textContent = "Storage: " + doc.data().Storage;

    li.appendChild(id);
    li.appendChild(cpu);
    li.appendChild(cas);
    li.appendChild(gpu);
    li.appendChild(motherb);
    li.appendChild(psu);
    li.appendChild(ram);
    li.appendChild(storage);

    sharedList.appendChild(li);
}

function getDataCommunity() {
    // db9.collection('CommunityList').get().then(snapshot => {
    //     snapshot.docs.forEach(doc => {
    //         renderCafe(doc);
    //     });
    // });
    const col = db9.collection('CommunityList');
    col.get().then(snapshot => {
        snapshot.docs.forEach( doc => {
            renderCafe(doc);
        })
    })

}
