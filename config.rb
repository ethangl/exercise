require 'slim'

set :relative_links, true
set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"

activate :autoprefixer
activate :sprockets

configure :development do
  activate :livereload
end

configure :build do
  activate :asset_hash
  activate :relative_assets
  activate :minify_css
  activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
  deploy.branch = "gh-pages"
end

helpers do
  def svg(name)
    root = Middleman::Application.root
    file_path = "#{root}/source/images/svg/#{name}.svg"
    return File.read(file_path) if File.exists?(file_path)
    '(not found)'
  end
end
