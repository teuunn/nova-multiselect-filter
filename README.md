# Nova Multiselect Filter

Provides capability of selecting multiple values with Nova Resource filter.

![Nova Multiselect Field](./screenshot.png)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require rcknr/nova-multiselect-filter
```

## Usage

Use `MultiselectFilter` class instead of `Filter`:

```php
use teuunn\Filters\MultiselectFilter;

class UserType extends MultiselectFilter
{
  public function apply(Request $request, $query, $value)
  {
      return $query->whereIn('user_role', $value);
  }

  public function options(Request $request)
  {
      return [
          'Administrator' => 'admin',
          'Editor' => 'editor',

      ];
  }
}
```
