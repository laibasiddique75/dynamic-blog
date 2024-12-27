import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from '../components/ui/Button';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}


export default function CommentSection({ postId }: CommentSectionProps) {
  const [comment, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);


  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {

      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,

      };
      setComment([...comment, newCommentObj]);
      setNewComment('');
      setAuthorName('');


    }
  };


  const handleEditComment = (commentID: string) => {
    const commentToEdit = comment.find((comment) => comment.id === commentID);

    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);


    }
  };
  const handleSaveComment = () => {

    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updateComments = comment.map((comment) =>
        comment.id === editingCommentId ? { ...comment, text: newComment, author: authorName } : comment);

      setComment(updateComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);

    }

  };

  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold'>Comments</h2>

      <div className='mt-4 space-y-4'>
        {comment.length > 0 ? (
          comment.map((comment) => (

            <Card key={comment.id}>
              <CardContent className='p-4'>
                <div className='font-semibold'>{comment.author}</div>

                <p>{comment.text}</p>

                <Button onClick={() => handleEditComment(comment.id)} className='mt-2 text-blue-500'>Edit</Button>
              </CardContent>

            </Card>
          ))
        ) : (

          <p className='text-slate-400'>No Comment Yet</p>
        )
        }
      </div>
      <div className='mt-6'>
        <Input type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder='Your Name' className='w-full mb-2' />
 
        <Input type='text' value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder='Add a Comment' className='w-full mb-2' />

        <Button onClick={editingCommentId ? handleSaveComment : handleAddComment} className='mt-4'>
          {editingCommentId ? 'Save' : 'Submit'}


        </Button>

        
      </div>
    



    </div>


  )





}

