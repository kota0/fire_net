class PostsController < ApplicationController

 
  before_action :authenticate_user!, only: [:new, :index]


  def new
    @post = Post.new  
  end

  def index
    @posts = Post.where(direction_id:params[:direction_id]).order("created_at DESC")
    @post = Post.new 
  end

  def create
    @post = Post.new(post_params)
    if @post.save(context: :create_image)
      redirect_to root_path
    else
      render :new
    end
  end

  def show 
   @post = Post.find(params[:id])
   @comment = Comment.new
   @comments = Comment.all
  end
     
  private
  def post_params
    params.require(:post).permit(:video, :state_id, :area_id, :mark, :injury_id, :escape_id, :help_id, :content, :image, :direction_id).merge(user_id: current_user.id)
  end

end

