require "phlex"
require "phlexite"

require_relative "pages/layout"
require_relative "pages/home"
require_relative "pages/blog"
require_relative "pages/about"

Phlexite::Site.new { |s|
  s.mount "assets", on: "/"

  s.page "index.html", Pages::Home.new
  s.page "blog/index.html", Pages::Blog.new
  s.page "about/index.html", Pages::About.new
}
