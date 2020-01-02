class UsersController < ApplicationController
    def show
        user = User.find_by(id: params[:id])
        if user
        render json: user
        else
            render json: { message: 'No user found with that id'}
        end
    end

    def index
        users = User.all 
        render json: users
    end
end
