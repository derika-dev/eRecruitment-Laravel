<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Question;

class QuestionController extends Controller
{
    public  function index()
    {
        // $questions = Question::all();
        return Inertia::render('admin/questions/question-management');
    }

    public  function add()
    {
        return Inertia::render('admin/questions/add-questions');
    }

}
