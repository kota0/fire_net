class PostsController < ApplicationController
  def new
    @post = Post.new 
  end

  def create
    post.create(post_params)
  end
     

  def index
    @posts = Post.all
  end


  private
  def post
    params.require(:post).permit(:image, :video, :area1, :area2, :mark, :jujury, :escape, :help, :content)
  end
end

