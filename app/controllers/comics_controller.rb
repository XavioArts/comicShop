class ComicsController < ApplicationController

    before_action :get_comics
    before_action :set_comic, only: [:show, :update, :edit, :destroy]

    def index
        render component: "Comics", props: { comics: @comics }
    end

    def show
        ## authenticity_token:session[:_csrf_token]
        render component: "Comic", props: { comic: @comic, chaps: @comic.chaps }
        ## trying out using the authenticity token
        ## skipping the authenticity token
    end

    def new
        ## authenticity_token:session[:_csrf_token]
        render component: "ComicNew", props: {comic: @comic }
    end

    def create
        @comic = Comic.new(set_params)
        if @comic.save
            redirect_to comics_path
        else
            render :new
        end
    end

    def edit
        ## authenticity_token:session[:_csrf_token]
        render component: "ComicEdit", props: {comic: @comic }
    end

    def update
        if @comic.update(set_params)
            redirect_to @comic
        else
            render :edit
        end
    end

    def destroy
        @comic.destroy
        redirect_to comics_path        
    end

    private

    def set_comic
        @comic = Comic.find(params[:id])
    end

    def get_comics
        @comics = Comic.all
    end

    def set_params
        params.require(:comic).permit(:title, :author, :sum, :syn)
    end

    ##here will have get comic method and sanitize params

end
