

const vega_pro1 = {
    "Project": "TOPI",
    "Description": "<p>investment and management asset.</p>",
    "Platform": "<i>API netcore 3.1</i> <br><i>MVC5, Entity Framework</i> <br><i>Console application (net5)</i> <i>Window service c#</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2019 for backend, Sql management tool",
    "TeamSize": "Include 7 developers, 1 QC and 1 BA",
    "Position": "Developer, techlead"
}

// For An Binh Bank
const anBinh_pro3 = {
    "Project": "Exception for loan amount",
    "Description": "<p>Web app to support department credit manage exceptions of loan amount. Process: employee send loan contract out of policy common of bank, manager review and approve the contract or comment to staff edit.</p>",
    "Platform": "<i>Web form ASP.NET c#, Entity Framework</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2013, Sql management tool",
    "TeamSize": "Include 2 developers",
    "Position": "Developer, from Aug 2018 to current"
}

const anBinh_pro2 = {
    "Project": "VIP Customer",
    "Description": "<p>Import data from core software when start day, calculate scores for customer based on volume trading of them. Support manager to build bonus customer policy.</p>",
    "Platform": "<i>Web form ASP.NET c#, ADO.NET</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Only me",
    "Position": "Developer, from Jan 2016 to Feb 2016"
}

const anBinh_pro1 = {
    "Project": "Key Performance Indicator (KPI)",
    "Description": "<p>Import data from core software when start day, calculate KPI for credit employee. Support manager build bonus staff policy. Export report to excel, html and auto send report daily to CEO.</p>",
    "Platform": "<i>Web form ASP.NET c#, ADO.NET</i><br><i>Database is SQL Oracle 12c</i>",
    "Tool": "Visual studio 2010, Toad",
    "TeamSize": "Include 2 developers",
    "Position": "Developer, from Dec 2015 to Nov 2017"
}

// For Goline
const goline_pro2 = {
    "Project": "VGaia Back office, outsourcing for Gaia Japan",
    "Description": "<p>Desktop app to support employee of stock company resolve following business: order securities, margin, advance, mortgage...</p>",
    "Platform": "<i>Frontend is java swing</i><br><i>Backend is a service writen by java, Crystal Report</i><br><i>Database is Oracle</i>",
    "Tool": "Eclipse, Toad",
    "TeamSize": "Include 7 developers and 4 QAs",
    "Position": "Developer, from Jan 2013 to Jun 2014"
}

const goline_pro1 = {
    "Project": "Dolphin Back office",
    "Description": "<p>Desktop app to support employee of stock company resolve following business: order securities, margin, advance, mortgage...</p>",
    "Platform": "<i>Frontend is Winform c#, Crystal Report</i><br><i>Backend is web service ASP.NET c#, ADO.NET</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Mar 2012 to Feb 2015"
}

// For BKAV
const goline_bkav = {
    "Project": "Human Resource Management System",
    "Description": "<p>Overall management of human resources, with the highest customization ability, to meet the scale from Groups, Corporations to small and medium enterprises.</p>",
    "Platform": "<i>ASP.NET MVC c#</i><br><i>Database is SQL server</i>",
    "Tool": "Visual Studio 2010, Sql management tool, Microsoft word, UML tool Rational Rose",
    "TeamSize": "Include 6 developers",
    "Position": "Developer, write document design analysis and code from Mar 2011 to Feb 2012"
}

function bodyOnload() {
    let now = new Date();
    document.getElementById('age').innerHTML = now.getFullYear() - 1987;

    // Load data for Vega
    let projectsAtVega = [medaid_pro1];
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

    // Load data for An Binh
    ret = '';
    let projectsAtAnBinh = [anBinh_pro3, anBinh_pro2, anBinh_pro1];
    projectsAtAnBinh.forEach(x => ret += fn(x));
    document.getElementById('projects_anbinh').innerHTML = ret;

    // Load data for Goline
    ret = '';
    let projectsAtGoline = [goline_pro2, goline_pro2];
    projectsAtGoline.forEach(x => ret += fn(x));
    document.getElementById('projects_goline').innerHTML = ret;

    // Load data for BKAV
    document.getElementById('projects_bkav').innerHTML = fn(goline_bkav);

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
