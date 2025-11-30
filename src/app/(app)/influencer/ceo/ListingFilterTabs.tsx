'use client'

import { Button } from '@/shared/Button'
import ButtonClose from '@/shared/ButtonClose'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonThird from '@/shared/ButtonThird'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/shared/Checkbox'
import { Description, Fieldset, Label } from '@/shared/fieldset'
import T from '@/utils/getT'
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { FilterVerticalIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Form from 'next/form'
import { useEffect, useMemo, useRef, useState } from 'react'
import Input from '@/shared/Input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {TCheckboxFilter, TListFilterOption, TListFilterOptions} from "@/data/types";

const CheckboxPanel = ({ filterOption, className }: { filterOption: TCheckboxFilter; className?: string }) => {
  return (
    <Fieldset>
      <CheckboxGroup className={className}>
        {filterOption.options.map((option) => (
          <CheckboxField key={option.name}>
            <Checkbox name={`${filterOption.name}[]`} value={option.name} defaultChecked={!!option.defaultChecked} />
            <Label>{option.name}</Label>
            {option.description && <Description>{option.description}</Description>}
          </CheckboxField>
        ))}
      </CheckboxGroup>
    </Fieldset>
  )
}

const ListingFilterTabs = ({
  filterOptions = [],
}: {
  filterOptions?: TListFilterOptions
}) => {
  const [showAllFilter, setShowAllFilter] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [search, setSearch] = useState<string>(searchParams.get('q') || '')
  const debounceRef = useRef<number | null>(null)

  // Keep local state in sync when user navigates via back/forward
  useEffect(() => {
    const current = searchParams.get('q') || ''
    setSearch(current)
  }, [searchParams])

  // Debounce search typing and sync to URL (?q=)
  // Important: do NOT depend on searchParams here, otherwise pagination clicks
  // (which change ?page=) will trigger this effect and wipe the page param.
  useEffect(() => {
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current)
    }
    debounceRef.current = window.setTimeout(() => {
      const currentQInUrl = (searchParams.get('q') || '').trim()
      const nextQ = search.trim()

      // If q didn't actually change, do nothing (avoid clearing page on noop)
      if (currentQInUrl === nextQ) return

      const params = new URLSearchParams(searchParams.toString())
      if (nextQ) {
        params.set('q', nextQ)
      } else {
        params.delete('q')
      }
      // reset pagination only when search (q) changes
      params.delete('page')
      const query = params.toString()
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
    }, 300) as unknown as number

    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current)
      }
    }
  }, [search, pathname, router])

  const handleFormSubmit = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData.entries())
  }

  const renderTabAllFilters = () => {
    return (
      <div className="shrink-0 grow md:grow-0">
        <Button
          outline
          onClick={() => setShowAllFilter(true)}
          className="w-full border-black! ring-1 ring-black ring-inset md:w-auto dark:border-neutral-200! dark:ring-neutral-200"
        >
          <HugeiconsIcon icon={FilterVerticalIcon} size={16} color="currentColor" strokeWidth={1.5} />
          <span>{T['common']['All filters']}</span>
          <span className="absolute top-0 -right-0.5 flex size-5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
            4
          </span>
        </Button>

        <Dialog
          open={showAllFilter}
          onClose={() => setShowAllFilter(false)}
          className="relative z-50"
          as={Form}
          action={handleFormSubmit}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/50 duration-200 ease-out data-closed:opacity-0"
          />
          <div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center pt-3">
            <DialogPanel
              className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-closed:translate-y-16 data-closed:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              transition
            >
              <div className="relative shrink-0 border-b border-neutral-200 p-4 text-center sm:px-8 dark:border-neutral-800">
                <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  {T['common']['Filters']}
                </DialogTitle>
                <div className="absolute end-2 top-2">
                  <ButtonClose plain onClick={() => setShowAllFilter(false)} />
                </div>
              </div>

              <div className="hidden-scrollbar grow overflow-y-auto text-start">
                <div className="divide-y divide-neutral-200 px-4 sm:px-8 dark:divide-neutral-800">
                  {filterOptions.map((filterOption, index) =>
                    filterOption ? (
                      <div key={index} className="py-7">
                        <h3 className="text-xl font-medium">{filterOption.label}</h3>
                        <div className="relative mt-6">
                          {filterOption.tabUIType === 'checkbox' && (
                            <CheckboxPanel filterOption={filterOption as TCheckboxFilter} />
                          )}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between bg-neutral-50 p-4 sm:px-8 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
                <ButtonThird className="-mx-3" onClick={() => setShowAllFilter(false)} type="button">
                  {T['common']['Clear All']}
                </ButtonThird>
                <ButtonPrimary type="submit" onClick={() => setShowAllFilter(false)}>
                  {T['common']['Apply filters']}
                </ButtonPrimary>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    )
  }

  if (!filterOptions || filterOptions.length === 0) {
    return <div>No filter options available</div>
  }

  return (
    <div className="flex flex-wrap items-center md:gap-x-4 md:gap-y-2">
      {renderTabAllFilters()}
      <PopoverGroup className="hidden flex-wrap gap-x-4 gap-y-2 md:flex" as={Form} action={handleFormSubmit}>
        <div className="h-auto w-px bg-neutral-200 dark:bg-neutral-700"></div>
        {filterOptions.map((filterOption, index) => {
          // only show 3 filters in the tab. Other filters will be shown in the All-filters-popover
          if (index > 2 || !filterOption) {
            return null
          }

          const checkedNumber =
            (filterOption as TCheckboxFilter).options?.filter((option) => !!option.defaultChecked)?.length || 0

          return (
            <Popover className="relative" key={index}>
              <PopoverButton
                as={Button}
                outline
                className={clsx(
                  'md:px-4',
                  checkedNumber &&
                    'border-black! ring-1 ring-black ring-inset dark:border-neutral-200! dark:ring-neutral-200'
                )}
              >
                <span>{filterOption.label}</span>
                <ChevronDownIcon className="size-4" />
                {checkedNumber ? (
                  <span className="absolute top-0 -right-0.5 flex size-5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
                    {checkedNumber}
                  </span>
                ) : null}
              </PopoverButton>

              <PopoverPanel
                transition
                unmount={false}
                className="absolute -start-5 top-full z-10 mt-3 w-sm transition data-closed:translate-y-1 data-closed:opacity-0"
              >
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
                  <div className="hidden-scrollbar max-h-[28rem] overflow-y-auto px-5 py-6">
                      <CheckboxPanel filterOption={filterOption as TCheckboxFilter} />
                  </div>

                  <div className="flex items-center justify-between rounded-b-2xl bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
                    <CloseButton className="-mx-3" as={ButtonThird} type="button">
                      {T['common']['Clear']}
                    </CloseButton>
                    <CloseButton type="submit" as={ButtonPrimary}>
                      {T['common']['Apply']}
                    </CloseButton>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          )
        })}
      </PopoverGroup>
      {/* Search input aligned to the right end */}
      <div className="ms-auto mt-3 w-full md:mt-0 md:w-72">
        <label htmlFor="listing-search" className="sr-only">
          {T['common']['Start your search']}
        </label>
        <Input
          id="listing-search"
          name="q"
          type="search"
          placeholder="식당명, 지점명, 주소 등으로 검색해보세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=""
        />
      </div>
    </div>
  )
}

export default ListingFilterTabs
