### Each of them below registries lies inside: `root/public/r/{name}.json`

1. Complex Component Registry; e.g., `complex-component.json`.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "complex-component",
  "type": "registry:component",
  "title": "Complex Component",
  "description": "A complex component showing hooks, libs and components.",
  "registryDependencies": ["card"],
  "files": [
    {
      "path": "registry/new-york/blocks/complex-component/page.tsx",
      "content": "import { cache } from \"react\"\nimport { PokemonCard } from \"@/registry/new-york/blocks/complex-component/components/pokemon-card\"\nimport { getPokemonList } from \"@/registry/new-york/blocks/complex-component/lib/pokemon\"\nconst getCachedPokemonList = cache(getPokemonList)\n\nexport default async function Page() {\n  const pokemons = await getCachedPokemonList({ limit: 12 })\n\n  if (!pokemons) {\n    return null\n  }\n\n  return (\n    <div className=\"mx-auto w-full max-w-2xl px-4\">\n      <div className=\"grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4\">\n        {pokemons.results.map((p) => (\n          <PokemonCard key={p.name} name={p.name} />\n        ))}\n      </div>\n    </div>\n  )\n}\n",
      "type": "registry:page",
      "target": "app/pokemon/page.tsx"
    },
    {
      "path": "registry/new-york/blocks/complex-component/components/pokemon-card.tsx",
      "content": "import { cache } from \"react\"\nimport { getPokemon } from \"@/registry/new-york/blocks/complex-component/lib/pokemon\"\nimport { Card, CardContent } from \"@/registry/new-york/ui/card\"\nimport { PokemonImage } from \"@/registry/new-york/blocks/complex-component/components/pokemon-image\"\n\nconst cachedGetPokemon = cache(getPokemon)\n\nexport async function PokemonCard({ name }: { name: string }) {\n  const pokemon = await cachedGetPokemon(name)\n\n  if (!pokemon) {\n    return null\n  }\n\n  return (\n    <Card>\n      <CardContent className=\"flex flex-col items-center p-2\">\n        <div>\n          <PokemonImage name={pokemon.name} number={pokemon.id} />\n        </div>\n        <div className=\"text-center font-medium\">{pokemon.name}</div>\n      </CardContent>\n    </Card>\n  )\n}\n",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/blocks/complex-component/components/pokemon-image.tsx",
      "content": "\"use client\"\n\n/* eslint-disable @next/next/no-img-element */\nimport { usePokemonImage } from \"@/registry/new-york/blocks/complex-component/hooks/use-pokemon\"\n\nexport function PokemonImage({\n  name,\n  number,\n}: {\n  name: string\n  number: number\n}) {\n  const imageUrl = usePokemonImage(number)\n\n  if (!imageUrl) {\n    return null\n  }\n\n  return <img src={imageUrl} alt={name} />\n}\n",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/blocks/complex-component/lib/pokemon.ts",
      "content": "import { z } from \"zod\"\n\nexport async function getPokemonList({ limit = 10 }: { limit?: number }) {\n  try {\n    const response = await fetch(\n      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`\n    )\n    return z\n      .object({\n        results: z.array(z.object({ name: z.string() })),\n      })\n      .parse(await response.json())\n  } catch (error) {\n    console.error(error)\n    return null\n  }\n}\n\nexport async function getPokemon(name: string) {\n  try {\n    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)\n\n    if (!response.ok) {\n      throw new Error(\"Failed to fetch pokemon\")\n    }\n\n    return z\n      .object({\n        name: z.string(),\n        id: z.number(),\n        sprites: z.object({\n          front_default: z.string(),\n        }),\n        stats: z.array(\n          z.object({\n            base_stat: z.number(),\n            stat: z.object({\n              name: z.string(),\n            }),\n          })\n        ),\n      })\n      .parse(await response.json())\n  } catch (error) {\n    console.error(error)\n    return null\n  }\n}\n",
      "type": "registry:lib"
    },
    {
      "path": "registry/new-york/blocks/complex-component/hooks/use-pokemon.ts",
      "content": "\"use client\"\n\n// Totally unnecessary hook, but it's a good example of how to use a hook in a custom registry.\n\nexport function usePokemonImage(number: number) {\n  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`\n}\n",
      "type": "registry:hook"
    }
  ]
}
```

2. Form Registry e.g., `example-form.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-form",
  "type": "registry:component",
  "title": "Example Form",
  "description": "A contact form with Zod validation.",
  "dependencies": ["zod"],
  "registryDependencies": ["button", "input", "label", "textarea", "card"],
  "files": [
    {
      "path": "registry/new-york/blocks/example-form/example-form.tsx",
      "content": "\"use client\"\n\nimport * as React from \"react\"\nimport {\n  Card,\n  CardTitle,\n  CardHeader,\n  CardDescription,\n  CardContent,\n  CardFooter,\n} from \"@/registry/new-york/ui/card\"\nimport { Input } from \"@/registry/new-york/ui/input\"\nimport { Label } from \"@/registry/new-york/ui/label\"\nimport { Button } from \"@/registry/new-york/ui/button\"\nimport { Textarea } from \"@/registry/new-york/ui/textarea\"\nimport { z } from \"zod\"\n\nconst exampleFormSchema = z.object({\n  name: z.string().min(1),\n  email: z.string().email(),\n  message: z.string().min(1),\n})\n\nexport function ExampleForm() {\n  const [pending, setPending] = React.useState(false)\n  const [state, setState] = React.useState({\n    defaultValues: {\n      name: \"\",\n      email: \"\",\n      message: \"\",\n    },\n    success: false,\n    errors: {\n      name: \"\",\n      email: \"\",\n      message: \"\",\n    },\n  })\n\n  const handleSubmit = React.useCallback(\n    (e: React.FormEvent<HTMLFormElement>) => {\n      e.preventDefault()\n      setPending(true)\n\n      const formData = new FormData(e.target as HTMLFormElement)\n      const data = Object.fromEntries(formData.entries())\n      const result = exampleFormSchema.safeParse(data)\n\n      if (!result.success) {\n        setState({\n          ...state,\n          errors: Object.fromEntries(\n            Object.entries(result.error.flatten().fieldErrors).map(\n              ([key, value]) => [key, value?.[0] ?? \"\"]\n            )\n          ) as Record<keyof typeof state.errors, string>,\n        })\n        setPending(false)\n        return\n      }\n\n      setPending(false)\n    },\n    [state]\n  )\n\n  return (\n    <form onSubmit={handleSubmit} className=\"w-full max-w-sm\">\n      <Card>\n        <CardHeader>\n          <CardTitle>How can we help?</CardTitle>\n          <CardDescription>\n            Need help with your project? We&apos;re here to assist you.\n          </CardDescription>\n        </CardHeader>\n        <CardContent className=\"flex flex-col gap-6\">\n          <div\n            className=\"group/field grid gap-2\"\n            data-invalid={!!state.errors?.name}\n          >\n            <Label\n              htmlFor=\"name\"\n              className=\"group-data-[invalid=true]/field:text-destructive\"\n            >\n              Name <span aria-hidden=\"true\">*</span>\n            </Label>\n            <Input\n              id=\"name\"\n              name=\"name\"\n              placeholder=\"Lee Robinson\"\n              className=\"group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive\"\n              disabled={pending}\n              aria-invalid={!!state.errors?.name}\n              aria-errormessage=\"error-name\"\n              defaultValue={state.defaultValues.name}\n            />\n            {state.errors?.name && (\n              <p id=\"error-name\" className=\"text-destructive text-sm\">\n                {state.errors.name}\n              </p>\n            )}\n          </div>\n          <div\n            className=\"group/field grid gap-2\"\n            data-invalid={!!state.errors?.email}\n          >\n            <Label\n              htmlFor=\"email\"\n              className=\"group-data-[invalid=true]/field:text-destructive\"\n            >\n              Email <span aria-hidden=\"true\">*</span>\n            </Label>\n            <Input\n              id=\"email\"\n              name=\"email\"\n              placeholder=\"leerob@acme.com\"\n              className=\"group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive\"\n              disabled={pending}\n              aria-invalid={!!state.errors?.email}\n              aria-errormessage=\"error-email\"\n              defaultValue={state.defaultValues.email}\n            />\n            {state.errors?.email && (\n              <p id=\"error-email\" className=\"text-destructive text-sm\">\n                {state.errors.email}\n              </p>\n            )}\n          </div>\n          <div\n            className=\"group/field grid gap-2\"\n            data-invalid={!!state.errors?.message}\n          >\n            <Label\n              htmlFor=\"message\"\n              className=\"group-data-[invalid=true]/field:text-destructive\"\n            >\n              Message <span aria-hidden=\"true\">*</span>\n            </Label>\n            <Textarea\n              id=\"message\"\n              name=\"message\"\n              placeholder=\"Type your message here...\"\n              className=\"group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive\"\n              disabled={pending}\n              aria-invalid={!!state.errors?.message}\n              aria-errormessage=\"error-message\"\n              defaultValue={state.defaultValues.message}\n            />\n            {state.errors?.message && (\n              <p id=\"error-message\" className=\"text-destructive text-sm\">\n                {state.errors.message}\n              </p>\n            )}\n          </div>\n        </CardContent>\n        <CardFooter>\n          <Button type=\"submit\" size=\"sm\" disabled={pending}>\n            {pending ? \"Sending...\" : \"Send Message\"}\n          </Button>\n        </CardFooter>\n      </Card>\n    </form>\n  )\n}\n",
      "type": "registry:component"
    }
  ]
}
```

3. Component with CSS. e.g., `example-with-css.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-with-css",
  "type": "registry:component",
  "title": "Example with CSS",
  "description": "A login form with a CSS file.",
  "files": [
    {
      "path": "registry/new-york/blocks/example-with-css/example-card.tsx",
      "content": "import \"./example-card.css\"\n\nexport function ExampleCard() {\n  return (\n    <div className=\"login-container\">\n      <div className=\"login-card\">\n        <h1 className=\"login-title\">Login</h1>\n        <p className=\"login-subtitle\">\n          Please enter your credentials to continue\n        </p>\n        <form className=\"login-form\">\n          <div className=\"form-group\">\n            <label htmlFor=\"field-email\">Email</label>\n            <input\n              id=\"field-email\"\n              type=\"email\"\n              placeholder=\"Enter your email\"\n              required\n            />\n          </div>\n          <div className=\"form-group\">\n            <label htmlFor=\"field-password\">Password</label>\n            <input\n              id=\"field-password\"\n              type=\"password\"\n              placeholder=\"Enter your password\"\n              required\n            />\n          </div>\n          <div className=\"form-actions\">\n            <button type=\"submit\" className=\"login-button\">\n              Sign In\n            </button>\n          </div>\n          <div className=\"form-footer\">\n            <a href=\"#\" className=\"forgot-password\">\n              Forgot password?\n            </a>\n          </div>\n        </form>\n      </div>\n    </div>\n  )\n}\n",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/blocks/example-with-css/example-card.css",
      "content": ".login-container {\n  --primary-color: #111111;\n  --primary-hover: #484747;\n  --error-color: #ef4444;\n  --text-color: #1f2937;\n  --text-light: #6b7280;\n  --border-color: #e5e7eb;\n  --background-light: #f9fafb;\n  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  background-color: var(--background-light);\n  width: 100%;\n}\n\n.login-card {\n  width: 100%;\n  max-width: 400px;\n  padding: 2rem;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: var(--card-shadow);\n}\n\n.login-title {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n.login-subtitle {\n  margin: 0 0 1.5rem 0;\n  font-size: 0.875rem;\n  color: var(--text-light);\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.login-error {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  background-color: rgba(239, 68, 68, 0.1);\n  border-left: 3px solid var(--error-color);\n  color: var(--error-color);\n  font-size: 0.875rem;\n  border-radius: 4px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.form-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.form-group input {\n  padding: 0.75rem;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  font-size: 1rem;\n  transition: border-color 0.15s ease;\n}\n\n.form-group input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n\n.form-group input::placeholder {\n  color: var(--text-light);\n}\n\n.form-actions {\n  margin-top: 0.5rem;\n}\n\n.login-button {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n\n.login-button:hover {\n  background-color: var(--primary-hover);\n}\n\n.login-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);\n}\n\n.form-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.forgot-password {\n  font-size: 0.875rem;\n  color: var(--primary-color);\n  text-decoration: none;\n}\n\n.forgot-password:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .login-card {\n    padding: 1.5rem;\n  }\n}\n",
      "type": "registry:component"
    }
  ]
}
```

4. hello-world. e.g, `hello-world.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:component",
  "title": "Hello World",
  "description": "A simple hello world component",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "registry/new-york/blocks/hello-world/hello-world.tsx",
      "content": "export function HelloWorld() {\n  return <h1 className=\"text-2xl font-bold\">Hello World</h1>\n}\n",
      "type": "registry:component"
    }
  ]
}
```

5. Registry combined. e.g, `registry.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:component",
      "title": "Hello World",
      "description": "A simple hello world component",
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "registry/new-york/blocks/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "example-form",
      "type": "registry:component",
      "title": "Example Form",
      "description": "A contact form with Zod validation.",
      "dependencies": ["zod"],
      "registryDependencies": ["button", "input", "label", "textarea", "card"],
      "files": [
        {
          "path": "registry/new-york/blocks/example-form/example-form.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "complex-component",
      "type": "registry:component",
      "title": "Complex Component",
      "description": "A complex component showing hooks, libs and components.",
      "registryDependencies": ["card"],
      "files": [
        {
          "path": "registry/new-york/blocks/complex-component/page.tsx",
          "type": "registry:page",
          "target": "app/pokemon/page.tsx"
        },
        {
          "path": "registry/new-york/blocks/complex-component/components/pokemon-card.tsx",
          "type": "registry:component"
        },
        {
          "path": "registry/new-york/blocks/complex-component/components/pokemon-image.tsx",
          "type": "registry:component"
        },
        {
          "path": "registry/new-york/blocks/complex-component/lib/pokemon.ts",
          "type": "registry:lib"
        },
        {
          "path": "registry/new-york/blocks/complex-component/hooks/use-pokemon.ts",
          "type": "registry:hook"
        }
      ]
    },
    {
      "name": "example-with-css",
      "type": "registry:component",
      "title": "Example with CSS",
      "description": "A login form with a CSS file.",
      "files": [
        {
          "path": "registry/new-york/blocks/example-with-css/example-card.tsx",
          "type": "registry:component"
        },
        {
          "path": "registry/new-york/blocks/example-with-css/example-card.css",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

### Registry Components

These are the example codes for registry components.
They live inside either of these locations:

A. UI Components
They are the simplest components that can be used directly in the UI.
e.g, Button, Input, card etc.

1. `/root/registry/{registry-name}/ui/{component-file}`

B. Blocks
They are the components that are used to build the UI.
e.g, Form, Modal, etc.

2. `/root/registry/{registry-name}/blocks/{component-name}/{component-files|folders}`

C. Templates
They are the templates that are used to build the UI.
e.g, Login, Signup, etc.

3. `/root/registry/{registry-name}/templates/{component-name}/{component-files|folders}`
