class PostsController < ApplicationController

 
  before_action :authenticate_user!, only: [:new, :index]


  def new
    @post = Post.new  
  end

  
  def index
    @post = Post.new

    if params[:direction_id]
      states = State.where(direction_id: params[:direction_id]) # 絞り込んだState
      state_id_list =states.map(&:id)
      @posts = Post.where(state_id: state_id_list).order("created_at DESC") 
    else
      if params[:status] # params[:status] が nil かどうかで分岐
        @posts = Post.where(status: params[:status])
      else
        @posts = Post.all.order("created_at DESC")
      end
    end

     
     
     

  end
  
  def create
    @post = Post.new(post_params)
      state_id = @post.state_id
      state = State.find_by(id: state_id)
    if @post.save!
      redirect_to root_path
    else
      render :new
    end
  end

  def show 
   @post = Post.find(params[:id])
   @comment = Comment.new
   @comments = @post.comments
   @status_name = if @post.status == 3 
                    '未対応'
                  elsif @post.status == 1 
                    '対応中'
                  elsif @post.status == 2 
                    '対応済み'
                  end
   end

     

  def update
    @post = Post.find(params[:id])
    @post.update(status: post_params[:status])

    if @post.save
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  private
  def post_params
    params.require(:post).permit(:video, :state_id, :area_id, :mark, :injury_id, :escape_id, :help_id, :content, :status, images: []).merge(user_id: current_user.id)
  end

end

