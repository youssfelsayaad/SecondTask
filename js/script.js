let url =
    "https://jsonplaceholder.typicode.com/users?fbclid=IwAR27WJhtCaoixo5N4aRW01_3iOCTUQZ8QJylz5FG_-WpBOqXpm7Bin0D0tI";
  
let showD = document.querySelector("#showD");
let myDate = async function (cb) {
    try {
        let res = await(await fetch(url)).json()
        cb (res)
    }
    catch (e) {
        console.log(e)
    }
}
    
myDate((myRes) => {
    myRes.map((ele) => {
        let tr = document.createElement("tr")
        td = createEle(tr, "td", `${ele.id}`)
        td = createEle(tr, "td", `${ele.name}`)
        td = createEle(tr, "td", `${ele.username}`);
        td = createEle(tr, "td", `${ele.email}`)
        td = createEle(
          tr,
          "td",
          `Street - "${ele.address.street}" // Suite - "${ele.address.suite}" // City - "${ele.address.city}" // Zipcode - "${ele.address.zipcode}" `
        )
        td = createEle(tr, "td", `Lat - "${ele.geo}" // Lng - "${ele.lng}"`)
        td = createEle(tr, "td", `${ele.phone}`)
        td = createEle(tr, "td", `${ele.website}`)
        td = createEle(
          tr,
          "td",
          `Name - "${ele.company.name}" // CatchPhrase - "${ele.company.catchPhrase}" // Bs - "${ele.company.bs}"`
        );
        showD.appendChild(tr)
    })
});

function createEle(parent,child,text) {
    let myEle = document.createElement(child)
    myEle.textContent = text;
    parent.appendChild(myEle)
}