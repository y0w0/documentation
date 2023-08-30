#!/usr/bin/env bash

check() {
    # Image should be webp
    if [[ "$1" =~ .*\.jpg ]] || [[ "$1" =~ .*\.jpeg ]] || [[ "$1" =~ .*\.png ]]
    then
        echo "$1: forbidden image format. Use webp instead." >&2
        return 1
    fi
}

main() {
    local TEMP ret=0

    if ! TEMP="$(getopt -o "h" -l "help" -n "$0" -- "$@")"
    then
        return 1
    fi
    eval set -- "$TEMP"

    while true
    do
        TEMP="$1"
        shift
        case "$TEMP" in
            -h|--help)
                echo "$(basename "$0") <files>"
                return
                ;;
            --)
                break
                ;;
        esac
    done

    while (( $# != 0 ))
    do
        local FILE="$1"
        shift

        if ! check "$FILE"
        then
            ret=1
        fi
    done

    return $ret
}

set -euo pipefail
shopt -s nullglob

main "$@"
