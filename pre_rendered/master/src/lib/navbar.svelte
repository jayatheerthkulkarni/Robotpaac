<script>
  import { onMount } from 'svelte';
  let currentPath = $state('');
  onMount(() => {
    currentPath = window.location.pathname;
    console.log('currentPath:', currentPath);
  });

  function isActive(href) {
    if (href === '/') {
      return currentPath === '/';
    } else {
      return currentPath.startsWith(href);
    }
  }
</script>

<nav id="nav">
  <ul class="first-half">
    <li>
      <a href="/" class="logo-link">
        <img src="/logo.png" alt="Main logo" />
      </a>
    </li>
  </ul>
  <ul class="second-half">
    <li><a href="/" class:active={isActive('/')}>Home</a></li>
    <li>
      <a href="/product" class:active={isActive('/product')}>Product Master</a>
    </li>
    <li>
      <a href="/suppliers" class:active={isActive('/suppliers')}>Suppliers</a>
    </li>
    <li>
      <a href="/customers" class:active={isActive('/customers')}>Customers</a>
    </li>
    <li><a href="/inwards" class:active={isActive('/inwards')}>Inwards</a></li>
    <li>
      <a href="/outwards" class:active={isActive('/outwards')}>Outwards</a>
    </li>
  </ul>
</nav>

<style>
  :root {
    --primary-color: #4a90e2;
    --secondary-color: #f8f8f8;
    --text-color: #333;
    --accent-color: #ff6b6b;
    --nav-height: 3.5rem;
    font-family:
      'system-ui',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  nav#nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-color);
    height: var(--nav-height);
    padding: 0 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  nav#nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  nav#nav .first-half li a.logo-link {
    display: flex;
    align-items: center;
    padding: 0.3rem 0;
  }
  nav#nav .first-half img {
    height: auto;
    max-height: calc(var(--nav-height) - 1.5rem);
    width: auto;
  }
  nav#nav ul.second-half li a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.9rem;
    border-radius: 0.3rem;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    position: relative;
  }
  nav#nav ul.second-half li a:hover {
    background-color: #6c3737;
    color: #f1e75d;
  }

  nav#nav ul.second-half li a.active {
    background-color: #f0f0f0;
    color: var(--text-color);
    font-weight: 600;
  }
  nav#nav ul.second-half li a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #6c3737;
    border-radius: 2px 2px 0 0;
  }

  @media (max-width: 768px) {
    nav#nav {
      flex-direction: column;
      align-items: stretch;
      padding: 0 1rem;
    }

    nav#nav ul {
      flex-direction: column;
      width: 100%;
      gap: 0.3rem;
      padding: 0.3rem 0;
    }

    nav#nav ul.second-half li a {
      width: 100%;
      display: block;
      padding: 0.6rem 1rem;
    }

    nav#nav .first-half {
      width: 100%;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #e0e0e0;
    }
  }
</style>
