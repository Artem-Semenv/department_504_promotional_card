<?php

namespace App\Http\Controllers;

use App\Models\ContactPerson;
use Illuminate\Http\Request;

class ContactPersonController extends Controller
{
    public function store(Request $request)
    {
        $person = new ContactPerson();
        $person->firstname_lastname_middlename = $request->get('pib');
        $person->phone_number = $request->get('phone_number');
        $person->email = $request->get('email');
        $person->save();
        echo 'Contacts are saved';

    }
}
