class Pages::Home < ::Phlex::HTML
  def project_link(name:, url:, desc:)
    li {
      a(href: url) { name }
      span { " - " + desc }
    }
  end

  def view_template
    render ::Pages::Layout.new(:home) {
      p { "i'm aleks rūtiņš." }
      p { "i'm a student and programmer, skilled with a wide variety of languages and tools." }

      h2 { "featured projects" }
      ul {
        project_link(
          name: "phlexite",
          url: "https://sr.ht/~aleksrutins/phlexite",
          desc: "a simple static site generator using phlex for templating"
        )

        project_link(
          name: "mzk",
          url: "https://sr.ht/~aleksrutins/mzk",
          desc: "bash scripts to help you manage your zettelkasten"
        )

        project_link(
          name: "dynamite",
          url: "https://dynamite.farthergate.com/",
          desc: "a customizable lv2 distortion plugin"
        )

        project_link(
          name: "packsnap",
          url: "https://packsnap.farthergate.com/",
          desc: "a reproducible container build system"
        )

        project_link(
          name: "biocircuits for mere mortals",
          url: "https://bc.farthergate.com/",
          desc: "a daunting topic broken down in a (hopefully) friendly way"
        )
      }
    }
  end
end
