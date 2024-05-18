<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Speciality extends Model
{
    use HasFactory;
    protected $fillable = [
        'number',
        'name',
        'description',
        'study_program',
        'pass_score',
        'learning_time'
    ];
}
