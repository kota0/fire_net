class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

 
  def new
    @post = Post.new 
  end

  def create
    post = Post.new(post_params)
    if post.save
      redirect_to root_path
    else
      render :new
    end
  end
     

  

  private
  def post_params
    params.require(:post).permit(:image, :video, :area1_id, :area2_id, :mark, :injury_id, :escape_id, :help_id, :content).merge(user_id: current_user.id)
  end

end

