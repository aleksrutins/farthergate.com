class Pages::Home < ::Phlex::HTML
  def view_template
    render ::Pages::Layout.new(:home) {
      p { "i'm aleks rūtiņš." }
      p { "i'm a student and programmer, skilled with a wide variety of tools." }

      h2 { "featured projects" }
      ul {
        li {
          a(href: "https://sr.ht/~aleksrutins/phlexite") { "phlexite" }
          span { " - a simple static site generator using phlex for templating" }
        }

        li {
          a(href: "https://dynamite.farthergate.com/") { "dynamite" }
          span { " - a customizable lv2 distortion plugin"}
        }

        li {
          a(href: "https://packsnap.farthergate.com/") { "packsnap" }
          span { " - a reproducible container build system" }
        }

        li {
          a(href: "https://bc.farthergate.com/") { "biocircuits for mere mortals" }
          span { " - a daunting topic broken down in a (hopefully) friendly way" }
        }
      }
    }
  end
end
