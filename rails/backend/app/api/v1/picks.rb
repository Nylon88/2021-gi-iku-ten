module V1
  class Picks < Grape::API
    resources :picks do
      desc 'pickボタンクリック時のレスポンス'
      params do
        requires :url, type: String
        requires :uid, type: String
      end
      post '/' do
        paper = Paper.find_by(url: params[:url])
        paper = Paper.create(url: params[:url]) unless paper.present?
        user = User.find_by(uid: params[:uid])
        pick = Pick.find_by(paper_id: paper.id, user_id: user.id)
        count = Pick.where(paper_id: paper.id).count
        if pick.present?
          present [count, "既にこの論文はPickしています"]
        else
          Pick.create(paper_id: paper.id, user_id: user.id)
          present [count + 1, "正常にPickできました"]
        end
      end
      get '/' do
        present Pick.all
      end
    end
  end
end
