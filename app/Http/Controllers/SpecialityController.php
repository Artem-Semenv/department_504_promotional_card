<?php

namespace App\Http\Controllers;

use App\Models\Speciality;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{
    private array $subjects =
        ['math'=>0.5,
        'ukr'=>0.2,
        'eng'=>0.3];
    public function show(Request $request)
    {
        $totalPoints = $this->calculatePoints($request);
        $speciality = Speciality::where('pass_score', '<=',$totalPoints)
            ->get();
        return json_encode($speciality);
    }

    public function calculatePoints(Request $request): float|int
    {
        $params = $request->all();
        $totalPoints = 0;
        foreach ($this->subjects as $subject => $coefficient) {
            if (isset($params[$subject])) {
                $result = $params[$subject] * $coefficient;
                $totalPoints += $result;
            }
        }
        return $totalPoints;
    }
}
