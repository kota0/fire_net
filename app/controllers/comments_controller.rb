class CommentsController < ApplicationController
  
   def create
    @comment = Comment.create(comment_params)
     if @comment.save
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)  
     end
    
  end

    
  private
  def comment_params
    params.require(:comment).permit(:comment, :status).merge(user_id: current_user.id, post_id: params[:post_id], )
  end 
end


