<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\Request;
use MongoDB\Laravel\Eloquent\Model;

class ContactPerson extends Model
{
    use HasFactory;
    protected $table = 'contacts';
    protected $fillable = [
        'firstname_lastname_middlename',
        'phone_number',
        'email'
    ];

}
