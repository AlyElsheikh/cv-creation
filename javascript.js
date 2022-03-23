function getResult(){

    let f_name = document.getElementById('F_Name').value;
    let l_name = document.getElementById('L_Name').value;
    let email = document.getElementById('Email').value;
    let country = document.getElementById('Country').value;
    let about = document.getElementById('About').value;

    f_name.innerText = "Hello new div";
    
    let s_fname = document.getElementById('SName');
    s_fname.innerText = (f_name) + ' ' + (l_name) ;
    let s_email = document.getElementById('SEmail');
    s_email.innerText = (email);
    let s_country = document.getElementById('SCountry');
    s_country.innerText = (country);
    let s_about = document.getElementById('SAbout');
    s_about.innerText = (about);


    document.getElementById('show').style.display= 'grid';
    document.getElementById('container').style.display= 'none';
}


function CandN(){
    document.getElementById('show').style.display= 'none';
    document.getElementById('container').style.display= 'flex';   
}