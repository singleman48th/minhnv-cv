

const vega_pro1 = {
    "Project": "TOPI",
    "Description": "<p>investment and management assets include saving money, buying and selling gold, stocks and fund certificate. </p>",
    "Platform": "<i>API netcore 3.1, MVC5, entity framework, console application (net5), window service c#, SQL server</i>",
    "Tool": "Visual studio 2019, Sql management tool",
    "TeamSize": "Include 7 developers, 1 QC and 1 BA",
    "Position": "Developer, techlead"
}



const cmc_pro1 = {
    "Project": "HISF",
    "Description": "<p>Outsource for Korea custommer. Mangagement report system for hospital</p>",
    "Platform": "<i>Winform c#, entities framework</i><br><i>Database is SQL Oracle 12c</i>",
    "Tool": "Visual studio 2017",
    "TeamSize": "Include 4 developers, 1 comtor",
    "Position": "Developer"
}


const daiviet_pro1 = {
    "Project": "Naijauto",
    "Description": "<p>Auto Portal to Buy and Sell Cars Online in Nigeria</p>",
    "Platform": "<i>ASP.NET MVC 4.0</i><br><i>window service c#, ADO.NET</i><br><i>PostgreSQL</i><br><i>Redis cache, elasticsearch</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 5 developers",
    "Position": "Developer"
}

const fsoft_pro1 = {
    "Project": "Monticello",
    "Description": "<p> migration 400.000 lines of code from VB6 to C#.net winform for America custommer</p>",
    "Platform": "<i> Visual basic, visual studio 2012</i><br><i>Database is Microsoft Access</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include over 10 developers and 3 QCs",
    "Position": "Developer, techlead"
}

const fsoft_pro2 = {
    "Project": "SiteCore",
    "Description": "<p> migration 400.000 lines of code from VB6 to C#.net winform for America custommer</p>",
    "Platform": "<i> Visual basic, visual studio 2012</i><br><i>Database is Microsoft Access</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include over 10 developers and 3 QCs",
    "Position": "Developer, techlead"
}

const fis_pro1 = {
    "Project": "Dolphin Back office",
    "Description": "<p>Desktop app to support employee of stock company resolve following business: order securities, margin, advance, mortgage...</p>",
    "Platform": "<i>Frontend is Winform c#, Crystal Report</i><br><i>Backend is web service ASP.NET c#, ADO.NET</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Mar 2012 to Feb 2015"
}
// For BKAV
const bkav_pro1 = {
    "Project": "OpenGTS" ,
    "Description": "<p> Tracking system for your fleet of vehicles. It supports OpenLayers and other map providers, detail/summary Reporting, and various GPS tracking devices.</p>",
    "Platform": "<i>java servlet</i><br><i> My SQL</i>",
    "Tool": "Navicat, eclipse",
    "TeamSize": "Include 5 developers",
    "Position": "Developer, write document design analysis and code"
}
const bkav_pro2 = {
    "Project": "gametrieuphu.vn" ,
    "Description": "<p> Website for playing games, watching movies</p>",
    "Platform": "<i>ASP.NET webform c#</i><br><i>SQL server</i>",
    "Tool": "Visual Studio 2005, Sql management tool",
    "TeamSize": "Include 1 developer",
    "Position": "Developer, write document design analysis and code"
}
function bodyOnload() {
    let now = new Date();
    document.getElementById('age').innerHTML = now.getFullYear() - 1987;

    // Load data for Vega
    let projectsAtVega = [vega_pro1];
    const projectSample = document.getElementById('project_sample').outerHTML;
    const fn = obj => {
        let ret = projectSample;
        Object.keys(obj).forEach(function(key) {
            ret = ret.replace(`@${key}`, obj[key]);
        });
        return ret.replace('project_sample', '');
    }

    let ret = '';
    projectsAtVega.forEach(x => ret += fn(x));
    document.getElementById('projects_vega').innerHTML = ret;

    // Load data for cmc
    ret = '';
    let projectsAtCMC = [cmc_pro1];
    projectsAtCMC.forEach(x => ret += fn(x));
    document.getElementById('projects_cmc').innerHTML = ret;

    // Load data for DaiViet
    ret = '';
    let projectsAtDaiViet = [daiviet_pro1];
    projectsAtDaiViet.forEach(x => ret += fn(x));
    document.getElementById('projects_daiviet').innerHTML = ret;
    
     // Load data for Fsoft
    ret = '';
    let projectsAtFsoft = [fsoft_pro1];
    projectsAtFsoft.forEach(x => ret += fn(x));
    document.getElementById('projects_fsoft').innerHTML = ret;
    
      // Load data for Fis
    ret = '';
    let projectsAtFis = [fis_pro1];
    projectsAtFis.forEach(x => ret += fn(x));
    document.getElementById('projects_fis').innerHTML = ret;

    // Load data for BKAV
      let projectsAtBKAV = [bkav_pro1,bkav_pro2];
    projectsAtBKAV.forEach(x => ret += fn(x));
    document.getElementById('projects_bkav').innerHTML = ret;

    setTimeout(() => {
        const loadImgs = document.getElementsByClassName('load-img-async');
        if (loadImgs && loadImgs.length > 0) {
            for (const x of loadImgs) {
                x.setAttribute('src', x.getAttribute('data-src'));
            }
        }

        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports `loading`..
            const medAidAward = document.getElementById('med-aid-award');
            const src = medAidAward.getAttribute('data-src');
            medAidAward.setAttribute('src', src);
        } else {
            // Fetch and apply a polyfill/JavaScript library
            // for lazy-loading instead.
            console.log('Not suport lazy-loading');
        }
    }, 10);
}

function viewMedAidAward() {
    document.getElementById('id01').style.display = 'block'
    const medAidAward = document.getElementById('med-aid-award');
    const src = medAidAward.getAttribute('data-src');
    medAidAward.setAttribute('src', src);
}
