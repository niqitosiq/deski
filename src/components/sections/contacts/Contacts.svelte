<script>
  import ContactBadge from '@/components/basic/ContactBadge.svelte'

  import Social from '@/components/basic/Social/Social.svelte'

  import Socials from '@/components/basic/Social/Socials.svelte'

  import Button from '@/components/ui/Button.svelte'

  import { viewClass } from '@/directives/inViewport'

  const contacts = [
    {
      label: 'Телефон',
      icon: 'phone',
      link: '#',
      text: '+7 (999) 000-00-00',
      size: 'md',
    },
    {
      label: 'E-mail',
      icon: 'mail',
      link: 'mail',
      text: 'info@site.ru',
      size: 'md',
    },
  ]
</script>

<section id="contacts" use:viewClass>
  <div class="container">
    <h2>Наши контакты</h2>

    <div class="contacts">
      <div class="left">
        {#each contacts as { label, icon, link, text, size }}
          <ContactBadge {label} {icon} {link} {size}>
            {text}
          </ContactBadge>
        {/each}

        <div class="socials">
          <Socials />
        </div>
      </div>

      <div class="right">
        <a href="//instagram.com/testtesttest">
          <Button styling="light">
            <div class="public">
              <Social icon="instagram" styling="square" />
              instagram.com/testtesttest
            </div>
          </Button>
        </a>

        <a href="//vk.com/testtesttest">
          <Button styling="light">
            <div class="public">
              <Social icon="vk" styling="square" />
              vk.com/testtesttest
            </div>
          </Button>
        </a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #contacts {
    padding-bottom: 300px;
    margin-top: 100px;
    @media screen and (max-width: 1240px) {
      margin-top: 200px;
    }
    @media screen and (max-width: 720px) {
      margin-top: 80px;
    }
  }

  h2 {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
    @media screen and (max-width: 1650px) {
      font-size: 44px;
      line-height: 42px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 38px;
      line-height: 42px;
    }
    @media screen and (max-width: 1320px) {
      font-size: 32px;
      line-height: 38px;
      flex-shrink: 0;
    }
    @media screen and (max-width: 790px) {
      text-align: center;
    }
    @media screen and (max-width: 520px) {
      font-size: 28px;
      line-height: 34px;
    }
  }

  .contacts,
  .socials,
  .public,
  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .contacts {
    @media screen and (max-width: 790px) {
      flex-wrap: wrap;
    }
  }

  .left,
  .right {
    width: 50%;
  }

  .left {
    justify-content: space-between;
    :global(.contact-badge) {
      width: auto;
      margin-right: 20px;
      margin-top: 15px;
      margin-bottom: 15px;
      :global(.wrapper) {
        margin-left: 20px;
      }
    }
    @media screen and (max-width: 1280px) {
      width: 100%;
      margin-right: 100px;
    }
    @media screen and (max-width: 1100px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 790px) {
      justify-content: center;
      margin-right: 0;
    }
  }

  .right {
    justify-content: flex-end;
    a {
      margin-left: 15px;
      @media screen and (max-width: 1280px) {
        margin-bottom: 15px;
      }
      @media screen and (max-width: 790px) {
        margin-left: 0;
      }
    }
    @media screen and (max-width: 1280px) {
      flex-direction: column;
      align-items: flex-end;
      width: auto;
      flex-shrink: 0;
    }
    @media screen and (max-width: 790px) {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      flex-wrap: wrap;
      flex-shrink: 1;
      justify-content: center;
      width: 100%;
    }
  }

  .contacts {
    justify-content: space-between;
  }

  .socials {
    :global(.social) {
      margin-left: 10px;
      width: 44px;
      height: 44px;
      @media screen and (max-width: 1520px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  .public {
    font-family: Gilroy;
    font-size: 18px;
    text-transform: none;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    @media screen and (max-width: 1520px) {
      font-size: 16px;
    }
    :global(.social) {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      @media screen and (max-width: 1520px) {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
