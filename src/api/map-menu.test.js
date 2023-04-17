import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if data does not exist.', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.srcImg).toBe('');
  });

  it('should map menu to match keys and values required.', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.link).toBe('#home');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if links does not exist.', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map if links exists.', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
