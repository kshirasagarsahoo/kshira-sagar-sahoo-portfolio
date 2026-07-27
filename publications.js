const papers = [

{
title:"DDoSBlocker: Enhancing SDN Security with Time-Based Address Mapping and AI-Driven Approach",
journal:"Computer Networks",
year:"2025"
},

{
title:"AttentionDriveNet: Fusion of Deep Cognitive Network",
journal:"PLOS ONE",
year:"2025"
},

{
title:"Fingerprinting-Assisted Geometric Approach for Device-Free Localization",
journal:"Computer Networks",
year:"2025"
},

{
title:"Digital Twin Enabled Fog Edge IoAT Framework",
journal:"Ecological Informatics",
year:"2025"
},

{
title:"Towards Adaptive Rule Replacement for Serverless SDN",
journal:"IEEE NOMS",
year:"2025"
},

{
title:"FloRa: Flow Table Low Rate Overflow Detection",
journal:"IEEE TNSM",
year:"2024"
},

{
title:"Enhancing DDoS Detection in SDIoT Through SMOTE ENN",
journal:"PLOS ONE",
year:"2024"
},

{
title:"Combination Learning Framework to Uncover Cyber Attacks",
journal:"Internet of Things",
year:"2024"
},

{
title:"Securing P4 SDN Data Plane",
journal:"IEEE NOMS",
year:"2024"
},

{
title:"Cogni Sec",
journal:"Internet of Things",
year:"2023"
}

];

let output = "";

papers.forEach(p => {

output += `

<div class="timeline-item">

    <div class="timeline-dot"></div>

    <div class="timeline-content">

        <span class="timeline-date">${p.year}</span>

        <h3>${p.title}</h3>

        <h4>${p.journal}</h4>

        <p>
            Research publication in the field of
            Software Defined Networking, Artificial Intelligence,
            Cyber Security and IoT.
        </p>

    </div>

</div>

`;

});

document.getElementById("publications").innerHTML = output;