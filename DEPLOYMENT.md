# GitHub Pages Deployment Setup

This repository is now configured to deploy to GitHub Pages with the custom domain `thebuzz.gravitas.uno`.

## What Was Configured

1. **Vite Build Configuration** (`vite.config.ts`)
   - Set `base: "/"` for proper asset path resolution on the custom domain

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automated deployment on push to `main` branch
   - Manual deployment option via workflow_dispatch
   - Builds the Vite project and deploys to GitHub Pages

3. **Custom Domain** (`public/CNAME`)
   - CNAME file with domain `thebuzz.gravitas.uno`
   - Automatically copied to build output

## Manual Steps Required (Repository Owner)

### Step 1: Enable GitHub Pages
1. Navigate to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Save the settings

### Step 2: Configure DNS at Domain Registrar
At your DNS provider for `gravitas.uno`, add a CNAME record:

```
Type:  CNAME
Name:  thebuzz
Value: jobbyist.github.io
TTL:   3600 (or your provider's default)
```

Alternatively, you can use A records pointing to GitHub's IP addresses:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Step 3: Configure Custom Domain in GitHub
1. Go to repository **Settings** → **Pages**
2. Under "Custom domain":
   - Enter: `thebuzz.gravitas.uno`
   - Click **Save**
3. Wait for DNS verification (may take a few minutes to an hour)
4. Once verified, check **Enforce HTTPS**

## Deployment Process

Once merged to `main`:
1. The GitHub Actions workflow triggers automatically
2. Dependencies are installed
3. Project is built with Vite
4. Built files are deployed to GitHub Pages
5. Site becomes available at `thebuzz.gravitas.uno`

## Monitoring

- **Deployments**: Check the **Actions** tab in GitHub
- **Workflow runs**: Each push to `main` creates a new deployment
- **Logs**: Click on any workflow run to see detailed logs

## Local Testing

To test the production build locally:
```bash
npm run build
npm run preview
```

## Troubleshooting

**DNS not resolving:**
- Wait up to 48 hours for DNS propagation (usually much faster)
- Verify DNS records with: `dig thebuzz.gravitas.uno` or `nslookup thebuzz.gravitas.uno`

**Build fails:**
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

**Custom domain not working:**
- Ensure CNAME file exists in `public/` directory
- Verify DNS records are correct
- Check GitHub Pages settings show the custom domain

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
