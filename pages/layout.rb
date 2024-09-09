module Pages
  class Layout < ::Phlex::HTML
    def initialize(title)
      @title = title
    end
    def view_template
      doctype
      html {
        head {
          title { @title + " | Aleks Rūtiņš" }
          meta(charset: "utf-8")
          meta(name: "viewport", content: "width=device-width, initial-scale=1.0")
          link(rel: "stylesheet", href: "/site.css")
        }
        body {
          yield
        }
      }
    end
  end
end
