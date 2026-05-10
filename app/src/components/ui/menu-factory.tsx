"use client"

import * as React from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type MenuPrimitive = React.ElementType

type MenuPrimitives = {
  Root: MenuPrimitive
  Trigger: MenuPrimitive
  Group: MenuPrimitive
  Portal: MenuPrimitive
  Sub: MenuPrimitive
  RadioGroup: MenuPrimitive
  Content: MenuPrimitive
  SubContent: MenuPrimitive
  Item: MenuPrimitive
  CheckboxItem: MenuPrimitive
  RadioItem: MenuPrimitive
  Label: MenuPrimitive
  Separator: MenuPrimitive
  SubTrigger: MenuPrimitive
  ItemIndicator: MenuPrimitive
}

type MenuItemVariant = "default" | "destructive"

type MenuFactoryConfig<T extends MenuPrimitives> = {
  primitives: T
  slotPrefix: string
  contentClassName: string
  subContentClassName: string
  subTriggerClassName: string
  subTriggerChevronClassName: string
  labelClassName?: string
  contentDefaultSideOffset?: number
}

const menuItemClassName =
  "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const menuSelectableItemClassName =
  "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const menuLabelClassName = "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"
const menuSeparatorClassName = "bg-border -mx-1 my-1 h-px"
const menuShortcutClassName = "text-muted-foreground ml-auto text-xs tracking-widest"

function createMenuScope<T extends MenuPrimitives>({
  primitives: Primitive,
  slotPrefix,
  contentClassName,
  subContentClassName,
  subTriggerClassName,
  subTriggerChevronClassName,
  labelClassName,
  contentDefaultSideOffset,
}: MenuFactoryConfig<T>) {
  const slot = (name?: string) => (name ? `${slotPrefix}-${name}` : slotPrefix)

  function Root(props: React.ComponentPropsWithoutRef<T["Root"]>) {
    return <Primitive.Root data-slot={slot()} {...props} />
  }

  function Trigger(props: React.ComponentPropsWithoutRef<T["Trigger"]>) {
    return <Primitive.Trigger data-slot={slot("trigger")} {...props} />
  }

  function Group(props: React.ComponentPropsWithoutRef<T["Group"]>) {
    return <Primitive.Group data-slot={slot("group")} {...props} />
  }

  function Portal(props: React.ComponentPropsWithoutRef<T["Portal"]>) {
    return <Primitive.Portal data-slot={slot("portal")} {...props} />
  }

  function Sub(props: React.ComponentPropsWithoutRef<T["Sub"]>) {
    return <Primitive.Sub data-slot={slot("sub")} {...props} />
  }

  function RadioGroup(props: React.ComponentPropsWithoutRef<T["RadioGroup"]>) {
    return <Primitive.RadioGroup data-slot={slot("radio-group")} {...props} />
  }

  function SubTrigger({
    className,
    inset,
    children,
    ...props
  }: React.ComponentPropsWithoutRef<T["SubTrigger"]> & {
    className?: string
    inset?: boolean
    children?: React.ReactNode
  }) {
    return (
      <Primitive.SubTrigger
        data-slot={slot("sub-trigger")}
        data-inset={inset}
        className={cn(subTriggerClassName, className)}
        {...props}
      >
        {children}
        <ChevronRightIcon className={subTriggerChevronClassName} />
      </Primitive.SubTrigger>
    )
  }

  function SubContent({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<T["SubContent"]> & {
    className?: string
  }) {
    return (
      <Primitive.SubContent
        data-slot={slot("sub-content")}
        className={cn(subContentClassName, className)}
        {...props}
      />
    )
  }

  function Content({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<T["Content"]> & {
    className?: string
  }) {
    const contentProps = {
      ...props,
    } as React.ComponentPropsWithoutRef<T["Content"]> & {
      sideOffset?: number
    }

    if (
      contentDefaultSideOffset !== undefined &&
      contentProps.sideOffset === undefined
    ) {
      contentProps.sideOffset = contentDefaultSideOffset
    }

    return (
      <Primitive.Portal>
        <Primitive.Content
          data-slot={slot("content")}
          className={cn(contentClassName, className)}
          {...contentProps}
        />
      </Primitive.Portal>
    )
  }

  function Item({
    className,
    inset,
    variant = "default",
    ...props
  }: React.ComponentPropsWithoutRef<T["Item"]> & {
    className?: string
    inset?: boolean
    variant?: MenuItemVariant
  }) {
    return (
      <Primitive.Item
        data-slot={slot("item")}
        data-inset={inset}
        data-variant={variant}
        className={cn(menuItemClassName, className)}
        {...props}
      />
    )
  }

  function CheckboxItem({
    className,
    children,
    checked,
    ...props
  }: React.ComponentPropsWithoutRef<T["CheckboxItem"]> & {
    className?: string
    children?: React.ReactNode
    checked?: boolean
  }) {
    return (
      <Primitive.CheckboxItem
        data-slot={slot("checkbox-item")}
        className={cn(menuSelectableItemClassName, className)}
        checked={checked}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <Primitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </Primitive.ItemIndicator>
        </span>
        {children}
      </Primitive.CheckboxItem>
    )
  }

  function RadioItem({
    className,
    children,
    ...props
  }: React.ComponentPropsWithoutRef<T["RadioItem"]> & {
    className?: string
    children?: React.ReactNode
  }) {
    return (
      <Primitive.RadioItem
        data-slot={slot("radio-item")}
        className={cn(menuSelectableItemClassName, className)}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <Primitive.ItemIndicator>
            <CircleIcon className="size-2 fill-current" />
          </Primitive.ItemIndicator>
        </span>
        {children}
      </Primitive.RadioItem>
    )
  }

  function Label({
    className,
    inset,
    ...props
  }: React.ComponentPropsWithoutRef<T["Label"]> & {
    className?: string
    inset?: boolean
  }) {
    return (
      <Primitive.Label
        data-slot={slot("label")}
        data-inset={inset}
        className={cn(menuLabelClassName, labelClassName, className)}
        {...props}
      />
    )
  }

  function Separator({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<T["Separator"]> & {
    className?: string
  }) {
    return (
      <Primitive.Separator
        data-slot={slot("separator")}
        className={cn(menuSeparatorClassName, className)}
        {...props}
      />
    )
  }

  function Shortcut({
    className,
    ...props
  }: React.ComponentProps<"span"> & {
    className?: string
  }) {
    return (
      <span
        data-slot={slot("shortcut")}
        className={cn(menuShortcutClassName, className)}
        {...props}
      />
    )
  }

  return {
    Root,
    Trigger,
    Content,
    Item,
    CheckboxItem,
    RadioItem,
    Label,
    Separator,
    Shortcut,
    Group,
    Portal,
    Sub,
    SubContent,
    SubTrigger,
    RadioGroup,
  }
}

export { createMenuScope }
