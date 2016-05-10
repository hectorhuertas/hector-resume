class Api::V1::ResumeController < Api::ApiController
  def show
    render json: Resume.hector
  end
end
