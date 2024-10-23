module Pages
  class Layout < ::Phlex::HTML
    def pages = {
      home: {
        title: "Home",
        url: "/"
      },
      blog: {
        title: "Blog",
        url: "/blog"
      },
      about: {
        title: "About",
        url: "/about"
      }
    }

    def initialize(page)
      @page = page
      if @page.is_a? Symbol
        @page_info = pages[page]
      else
        @page_info = @page
      end
    end
    def view_template

      doctype
      html {
        head {
          title { @page_info[:title] + " | Aleks Rūtiņš" }
          meta(charset: "utf-8")
          meta(name: "viewport", content: "width=device-width, initial-scale=1.0")
          link(rel: "prefetch", href: "/DM_Mono/DMMono-Regular.ttf")
          link(rel: "prefetch", href: "/DM_Mono/DMMono-Medium.ttf")
          link(rel: "stylesheet", href: "/site.css")
        }
        body {
          header {
            nav {
              pages.each { |key, page|
                a(href: page[:url], class: key == @page ? "active" : "") { page[:title].downcase }
              }
            }
          }
          yield
        }
      }
    end
  end
end
