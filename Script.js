const get_nameID = document.getElementById('name'); //name
const get_ageID = document.getElementById('age'); //age
const get_emailID = document.getElementById('email'); //email
const get_methodsID = document.querySelector('input[name="methods"]:checked'); //methods
const get_fundID = document.querySelector('input[name="fund"]:checked'); //fund

var valid;

function check_name()
{
    const pattern = /^[A-Za-z][A-Za-z-\s]+$/;
    if (pattern.test(get_nameID.value)) 
    {
        name_error.classList.remove('active');
        valid = true;
    }
    else 
    {
        name_error.classList.add('active');
        valid = false;
    }
}

function check_age()
{
    if (get_ageID.value >= 18) 
    {
        age_error.classList.remove('active');
        valid = true;
    }
    else 
    {
        age_error.classList.add('active');
        valid = false;
    }
}

function check_email()
{
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern.test(get_emailID.value)) 
    {
        email_error.classList.remove('active');
        valid = true;
    }
    else 
    {
        email_error.classList.add('active');
        valid = false;
    }
}

function check_methods()
{
    if(get_methodsID.value != null)
    {
        valid = true;
    }
    else
    {
        valid = false;
    }
}

function check_fund() 
{
    if (get_fundID.value != null) 
    {
        valid = true;
    }
    else 
    {
        valid = false;
    }
}