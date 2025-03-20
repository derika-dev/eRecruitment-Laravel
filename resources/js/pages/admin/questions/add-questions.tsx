import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash } from "lucide-react";
import { type BreadcrumbItem } from '@/types';
import AppLayout from "@/layouts/app-layout";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Add Question',
        href: '/dashboard/add-questions',
    },
];

const AddQuestionPanel = () => {
    const [questions, setQuestions] = useState([
        { question: "", options: [""], correctAnswer: "" }
    ]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: "", options: [""], correctAnswer: "" }]);
    };

    const handleRemoveQuestion = (index: number) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleAddOption = (qIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.push(""); // Tambah opsi baru
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex: number, oIndex: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].correctAnswer = value;
        setQuestions(newQuestions);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log("Submitted Questions:", questions);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <div className="mx-auto py-8" style={{ width: '80%' }}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Tambah Soal Psikotes</CardTitle>
                </CardHeader>
                <CardContent>
                    {questions.map((q, qIndex) => (
                        <div key={qIndex} className="mb-6 border-b pb-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Soal {qIndex + 1}</h3>
                                {questions.length > 1 && (
                                    <Button variant="ghost" size="sm" onClick={() => handleRemoveQuestion(qIndex)}>
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                            <Textarea
                                placeholder="Masukkan pertanyaan"
                                value={q.question}
                                onChange={(e: { target: { value: string; }; }) => handleQuestionChange(qIndex, e.target.value)}
                                className="mb-4"
                            />
                            {q.options.map((option, oIndex) => (
                                <Input
                                    key={oIndex}
                                    placeholder={`Pilihan ${oIndex + 1}`}
                                    value={option}
                                    onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                    className="mb-2"
                                />
                            ))}
                            <Button variant="outline" onClick={() => handleAddOption(qIndex)} className="gap-1">
                                <Plus className="h-4 w-4" /> Tambah Pilihan
                            </Button>
                        </div>
                    ))}
                    <Button variant="outline" onClick={handleAddQuestion} className="gap-1">
                        <Plus className="h-4 w-4" /> Tambah Soal
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button  onClick={handleSubmit}>Simpan Soal</Button>
                </CardFooter>
            </Card>
        </div>
        </AppLayout>
    );
};

export default AddQuestionPanel;
